/* eslint-disable no-console */
// eslint-disable-next-line import/order
const config = require('../config.js');
require('newrelic');

const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const artistRouter = require('./router/index.js');

const app = express();

const PORT = config.app.port;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));

// router
app.use('/data/artist', artistRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
