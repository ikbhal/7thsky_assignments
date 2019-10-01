// express
const express = require('express');
const app = express();
const http = require('http').Server(app);

var lastQuestionNumber = 0;
var questions = [];

app.use(express.json());
app.get('/hello', function(req, res){
    res.send("Hello World");
});
// create new question
// http method post, url: /questions, body content type application/json, 
/*
body: {
 "question:": "What is Amazon Elastic Compute Cloud (Amazon EC2)?",
 "answer": "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers."
}
*/
app.post('/questions', function(req, res){
    //res.send("will create question");
    //res.json(req.body);
    var question = req.body;
    question.number = lastQuestionNumber;
    lastQuestionNumber = lastQuestionNumber + 1;
    questions.push(question);
    //questions array , more than zero 
    // question is object  {"question" : "", "answer": "", "number": }
    // array index start from zero 0
    res.json(question);
});

/**
 *  Retrieve all questions or get all questions
 * http method: GET
 * url: /questions
 * body: no body
 * resposne/output:
 * reponse content type: application/json
 * [
 * { "question" : "<question>", "answer": "<ansser>", "number": <number>}
 * ,
 * { "question" : "<question>", "answer": "<ansser>", "number": <number>}
 * ...
 * ]
 */
app.get("/questions", function(req, res){
    res.json(questions);
});
const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});

