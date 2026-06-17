import { server_default } from '../dist/server/index.js';

export default async function handler(req, res) {
  try {
    const response = await server_default.fetch(
      new Request(`http://${req.headers.host}${req.url}`, {
        method: req.method,
        headers: req.headers,
        body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
      })
    );

    res.statusCode = response.status;
    res.statusMessage = response.statusText;

    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }

    const buffer = await response.arrayBuffer();
    res.end(Buffer.from(buffer));
  } catch (error) {
    console.error('API handler error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
