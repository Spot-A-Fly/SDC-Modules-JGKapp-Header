const path = require('path');
const db = require('./index.js');

const createArtistsTable = () => {
  const sqlString = `CREATE TABLE artists (
    artistId SERIAL PRIMARY KEY,
    name VARCHAR(75),
    header_img VARCHAR(140)
  )`;

  return db.query('DROP TABLE IF EXISTS artists')
    .then(() => db.query(sqlString));
};

const seedDatabase = () => {
  // const sqlString = 'COPY artists FROM $1 DELIMITER $2 CSV HEADER';
  const pathToCSV = path.resolve(__dirname, '../database/artists.csv');
  const delimiter = ',';
  // const sqlValues = [pathToCSV, delimiter];
  const sqlString = `COPY artists(name, header_img) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return db.query(sqlString);
};

createArtistsTable()
  .then(seedDatabase)
  .catch(console.log);
