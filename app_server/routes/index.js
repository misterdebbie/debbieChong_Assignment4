var express = require('express');
var router = express.Router();
var ctrlNotes = require('../controllers/notes.js');
var ctrlOthers = require('../controllers/others.js');
//this will GET home page
//direct the route to look for this in the url request
//Location pages
router.get('/', ctrlNotes.loginHome);
router.get('/note', ctrlNotes.noteEdit);
router.get('/title', ctrlNotes.titleEdit);
router.get('/about', ctrlOthers.about);
//reference index method of controllers in route definition
//the second parameter of router.get method references the controller function
module.exports = router;

//so app.js requires routes/index.js, which in turn requires controllers/main.js

module.exports = router;
