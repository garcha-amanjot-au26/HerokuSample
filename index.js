const express = require('express');

const app = express();

const postData = require('./mock/posts.json');

const port = process.env.port || 3002;

app.get('/', (req,res) => {
    res.send('hello')
})

app.get('/posts',(req,res) => {
    res.json(postData.posts)
})

app.listen(port,console.log('Server live on :', port ));