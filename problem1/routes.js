const fs = require('fs');

const requestHandler = (req, res) => {
   const url = req.url;
   const method = req.method;
   if (url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Welcome!</title></head>');
      res.write('<body><h1>Welcome user! Welcome to my page!</h1><form action="/createUser" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
      res.write('</html>');
      return res.end();
   }
   if (url === '/users') {
      res.write('<html>');
      res.write('<head><title>Users</title></head>');
      res.write('<body><ul><li>Michael</li><li>Tim</li><li>Jonathon</li></ul></body>');
      res.write('</html>');
      return res.end();
   }
   if (url === '/createUser' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
         body.push(chunk);
      });
      return req.on('end', () => {
         const parsedBody = Buffer.concat(body).toString();
         console.log(parsedBody.split('=')[1]);
         res.statusCode = 302;
         res.setHeader('Location', '/');
         return res.end();
      });
   }
};

exports.handler = requestHandler;