const http = require('http');
const app = require('./app');

http.createServer(app.handleRequest).listen(4000);

console.log('Your server is up and running')