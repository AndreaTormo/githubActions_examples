const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola, món!\n');
});

server.listen(3000, () => {
  console.log('Servidor escoltant en el port 3000');
});

const variableNoUtilitzada = 123;
