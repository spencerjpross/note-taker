const path = require('path');
const index = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils')
const { v4: uuidv4 } = require('uuid');



index.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


index.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newPost = {
       title,
       text,
       id: uuidv4(),
      };
  
      readAndAppend(newPost, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

index.delete('/:id', (req,res) => {
    const { id } = req.params;
    console.log(id)
    readFromFile('./db/db.json').then((data) => {
        const filteredNotes = JSON.parse(data).filter((note) => note.id !== id);
        console.log(filteredNotes);
        writeToFile('./db/db.json', filteredNotes);
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    });
})




module.exports = index