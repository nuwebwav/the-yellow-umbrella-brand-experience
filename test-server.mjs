import server from './dist/server/index.js';

async function main(){
  try{
    const req = new Request('http://localhost/');
    const res = await server.fetch(req);
    console.log('status', res.status);
    const text = await res.text();
    console.log('body length', text.length);
  }catch(err){
    console.error('ERROR:', err);
    process.exit(1);
  }
}

main();
