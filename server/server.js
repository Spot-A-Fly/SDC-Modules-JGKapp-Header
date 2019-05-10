/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));

// Controller for GET by id
app.get('/data/artist/:id', (req, res) => {
  const { id } = req.params;

  db.getArtist(id)
    .then(artist => res.json(artist))
    .catch(console.log);
});

// Controller for POST
app.post('/data/artist', (req, res) => {
  const { name } = req.body;
  const { header_img } = req.body;

  db.save({ name, header_img });
  res.status(201).json();
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
