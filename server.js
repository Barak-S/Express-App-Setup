const express = require('express');
const app = express();

const port = 5000

app.listen(port, function(){
    console.log("listening on port " + port)
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/page2', function(req, res) {
    res.sendFile(__dirname + '/page2.html')
})

