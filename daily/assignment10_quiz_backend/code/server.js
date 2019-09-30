const express = require('express');
const app = express();

app.use(express.json());

const http = require('http').Server(app);
var questions = [  ];
app.post('/questions', function(req, res) {
    var question = req.body;
    questions.push(question);
});
app.use(express.static("public"));
const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});
