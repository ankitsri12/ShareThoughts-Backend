const express = require('express');


const app = express();

// IMport Routes
// const posts = require('./controllers/posts');

app.get('/', (req, res) => {
  res.send('hello')
});

app.listen(5000, ()=> {
  console.log('connected')
})