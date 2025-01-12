const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  try {
    // Your request handling logic here
    res.end();
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

server.on('error', (error) => {
  console.error('Server error:', error);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});