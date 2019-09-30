const express = require('express');
const app = express();

app.use(express.json());

const http = require('http').Server(app);
var questions = [  ];
var questionCounter = 1;
app.post('/questions', function(req, res) {
    var question = req.body;
    question.questionId = questionCounter;
    questionCounter ++;
    questions.push(question); 

    res.json(question);
});

app.use(express.static("public"));
const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});
