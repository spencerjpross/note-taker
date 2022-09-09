const express = require('express');
const notesRoute = require('./routes/notes');
const indexRoute = require('./routes/index')
const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/notes', notesRoute);
app.use('/api/notes', indexRoute);




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);