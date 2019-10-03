

var mongoose = require('mongoose');


// create connection to mongo db
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27022/linkdb';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Define a schema
var Schema = mongoose.Schema;
//mongoose load -> db connect -> Schema-> create SchemaModel -> create Instance -> save the instance
var LinkSchemaModel = new Schema({
  url: String,
  notes: String,
  votes: Number
});


// Compile model from schema
var LinkModel = mongoose.model('links', LinkSchemaModel );

// Create an instance of model SomeModel
var linkInstance = new LinkModel(
    { url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose',
      notes: 'mongoose tutorial. node.js related',
      votes: 1 });

// Save the new model instance, passing a callback
linkInstance.save(function (err) {
  if (err) {
   console.err(err);
  }
  else {
    console.log("link saved");
  }
});