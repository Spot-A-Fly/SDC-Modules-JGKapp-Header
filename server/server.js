const express = require('express');
const path = require('path');
const db = require('../database/index.js')

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));

// planning for get requests
// app.get('/data/artist/:id', (req, res) => {
//   const id = req.params.id;

//   db.getArtist(id)
//     .then(artist => res.json(artist))
//     .catch(console.log)
// } )

app.post('/data/artist', function (req, res) {
  const name = req.body.name;
  const header_img = req.body.header_img;

  db.save({ name: name, header_img: header_img })
  res.status(201).json();

});


const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));