const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`[HTTP] ${req.method} ${req.url}`);
  res.end('Hello World');
});

server.on('error', err => console.error('[HTTP ERROR]', err));

server.listen(3000, () => console.log('Server running on port 3000'));
