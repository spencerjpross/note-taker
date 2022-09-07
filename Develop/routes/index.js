const path = require('path');
const index = require('express').Router();
const fs = require('fs');
// const util = require('util');

// // Promise version of fs.readFile
// const readFromFile = util.promisify(fs.readFile);



index.get('/notes', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        console.log(data)
    }).then((data) => res.json(JSON.parse(data)));
});


// index.post('/', (req, res) => {
//     console.log(req.body);
  
//     const { username, topic, tip } = req.body;
  
//     if (req.body) {
//       const newTip = {
//         username,
//         tip,
//         topic,
//         tip_id: uuidv4(),
//       };
  
//       readAndAppend(newTip, './db/tips.json');
//       res.json(`Tip added successfully 🚀`);
//     } else {
//       res.error('Error in adding tip');
//     }
//   });




module.exports = index