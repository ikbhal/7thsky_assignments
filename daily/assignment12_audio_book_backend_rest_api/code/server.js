// express
const express = require('express');
const app = express();
const http = require('http').Server(app);


app.use(express.json());
app.get('/ping', function(req, res){
    res.send("pong");
});

//create audio book rest api
/*
requirement:
http method: POST
url: /audio_books
body 
 content type: application/json (mime type of json )
 {
     {
    "name": "This Is Marketing. You Can’t Be Seen Until You Learn to See. Seth Godin",
    "author": "Seth Godin",
    "narrated_by":"Seth Godin",
    "length": "7 hrs and 2 mins",
    "releaseDate": "13-11-18",
    "language": "english",
    "publisher"  : "Penguin Books Ltd"
}

reponse 
content type : mime type application/json

{
    "id": 0,
    "name": "This Is Marketing. You Can’t Be Seen Until You Learn to See. Seth Godin",
    "author": "Seth Godin",
    "narrated_by":"Seth Godin",
    "length": "7 hrs and 2 mins",
    "releaseDate": "13-11-18",
    "language": "english",
    "publisher"  : "Penguin Books Ltd"
}

*/

var audioBooks = []; // plural, arrary, contain many books
var audioBookCounter = 0 ;// use to generate number 0, 1, 2
app.post('/audio_books', function(req, res){
    var audioBook = req.body;
    audioBook.id = audioBookCounter;
    audioBookCounter = audioBookCounter + 1;

    audioBooks.push(audioBook);

    res.json(audioBook);
});

// get one audio book
/*
htt method : GET
url: /audio_books/786
body  -> no body
response
 content type: application/json -> res.json()

 example:
 {
    "id": 0,
    "name": "This Is Marketing. You Can’t Be Seen Until You Learn to See. Seth Godin",
    "author": "Seth Godin",
    "narrated_by":"Seth Godin",
    "length": "7 hrs and 2 mins",
    "releaseDate": "13-11-18",
    "language": "english",
    "publisher"  : "Penguin Books Ltd"
}
 
doc: http://expressjs.com/
*/
app.get('/audio_books/:bookId', function(req, res){
     console.log(req.params);
     var bookId = req.params.bookId;
     var book = audioBooks[bookId];
     console.log(book);
     res.json(book);
});

/**
 * get all books
 * http
 */
app.get("/audio_books", function(req, res){
    res.json(audioBooks);
});
  

const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});

