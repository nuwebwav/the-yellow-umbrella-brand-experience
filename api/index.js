async function loadServerEntry() {
  const candidates = [
    '../dist/server/index.js',
    '../dist/server/server.js',
    '../dist/server/main.js'
  ];

  for (const c of candidates) {
    try {
      const mod = await import(c);
      const server = mod.default ?? mod.server_default ?? (mod.createServerEntry ? mod : null);
      if (server) return server;
    } catch (e) {
      // continue trying other candidates
    }
  }
  throw new Error('No server entry found in dist/server');
}

function copyHeadersToNode(responseHeaders, res) {
  for (const [key, value] of responseHeaders.entries()) {
    try { res.setHeader(key, value); } catch (e) {}
  }
}

export default async function handler(req, res) {
  let server;
  try {
    server = await loadServerEntry();
  } catch (err) {
    console.error('Failed to load server entry:', err);
    res.statusCode = 500;
    res.end('Server entry not found');
    return;
  }

  try {
    const fetcher = server.fetch ?? (server.default && server.default.fetch) ?? server;
    const url = `http://${req.headers.host}${req.url}`;
    const body = ['GET','HEAD'].includes(req.method) ? undefined : req;
    const request = new Request(url, { method: req.method, headers: req.headers, body: body });

    const response = await fetcher.call(server, request);

    res.statusCode = response.status;
    res.statusMessage = response.statusText;
    copyHeadersToNode(response.headers, res);

    const buf = await response.arrayBuffer();
    res.end(Buffer.from(buf));
  } catch (error) {
    console.error('API handler invocation error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}

