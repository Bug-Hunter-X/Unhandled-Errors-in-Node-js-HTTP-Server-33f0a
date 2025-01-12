const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// This is wrong. It is missing error handling, which could lead to crashes if the server encounters unexpected errors.
