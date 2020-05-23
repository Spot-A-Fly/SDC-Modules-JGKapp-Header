/* eslint-disable no-console */
const path = require('path');
const db = require('../database/index.js');

const createArtistsTable = () => {
  const sqlString = `CREATE TABLE artists (
    artist_id SERIAL PRIMARY KEY,
    artist_name VARCHAR(80),
    artist_img_url VARCHAR(140)
  )`;

  return db.query('DROP TABLE IF EXISTS artists')
    .then(() => db.query(sqlString));
};

const seedDatabase = () => {
  const pathToCSV = path.resolve(__dirname, './artists.csv');
  const delimiter = ',';
  const sqlString = `COPY artists(artist_name, artist_img_url) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return db.query(sqlString);
};

const indexArtistName = () => {
  const sqlString = 'CREATE INDEX idx_artist_name ON artists(artist_name)';

  return db.query(sqlString);
};

createArtistsTable()
  .then(() => console.log('Created table now importing data'))
  .then(seedDatabase)
  .then(() => console.log('Imported all records now creating index on artist_name'))
  .then(indexArtistName)
  .catch(console.log);
