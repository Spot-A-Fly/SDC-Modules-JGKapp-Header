/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const artistRouter = require('./router/index.js');
const config = require('../config.js');

const app = express();

const PORT = config.app.port;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));

// // Controller for GET by id
// app.get('/data/artist/:id', (req, res) => {
//   const { id } = req.params;

//   db.getArtist(id)
//     .then(artist => res.json(artist))
//     .catch(console.log);
// });

// // Controller for POST
// app.post('/data/artist', (req, res) => {
//   const { name } = req.body;
//   const { header_img } = req.body;

//   db.save({ name, header_img });
//   res.status(201).json();
// });

// router
app.use('/data/artist', artistRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
