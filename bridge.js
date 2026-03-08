const httpProxy = require('http-proxy'); // You might need: npm install http-proxy
const proxy = httpProxy.createProxyServer({ target: 'http://localhost:3000', ws: true });

const server = require('http').createServer((req, res) => {
  proxy.web(req, res);
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});

console.log("Bridge running on http://localhost:3001 -> http://localhost:3000");
server.listen(3001);
