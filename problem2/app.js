const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
   console.log('Middleware #1 reached!');
   res.send('<h1>Middleware #1 reached!</h1>');
});

app.use('/', (req, res, next) => {
   console.log('Middleware #2 reached!');
   res.send('<h1>Middleware #2 reached!</h1>');
});

app.listen(3000);