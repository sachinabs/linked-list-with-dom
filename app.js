const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());

const dataObj = [{
    id:100,
    head: null,
    data:"<h1> Data 0 </h1>",
    tail: 101,
},
{
    id:101,
    head: 100,
    data:"<h1> Data 1 </h1>",
    tail: 102,
},
{
    id:102,
    head: 101,
    data:"<h1> Data 2 </h1>",
    tail: null,
}
];



app.get('/show-post', (req, res) =>{
const displayFirstPost = dataObj[0];
res.send(displayFirstPost);
})

app.get('/next-post', (req, res) =>{
    const getParamFromPreviousPost = req.query.tail;
    const nextPost = dataObj.find(post => post.id === parseInt(getParamFromPreviousPost));
    res.send(nextPost);
})

app.get('/previous-post', (req, res) =>{
    const getParamFromNextPost = req.query.head;
    const previousPost = dataObj.find(post => post.id === parseInt(getParamFromNextPost));
    res.send(previousPost);
})

const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
})