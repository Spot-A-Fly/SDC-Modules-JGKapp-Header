const csv = require('@fast-csv/format');
const path = require('path');
const fs = require('fs');
const faker = require('faker');

class CsvFile {
  static write(filestream, rows, options) {
    return new Promise((res, rej) => {
      csv.writeToStream(filestream, rows, options)
        .on('error', (err) => rej(err))
        .on('finish', () => res());
    });
  }

  constructor(opts) {
    this.headers = opts.headers;
    this.path = opts.path;
    this.writeOpts = { headers: this.headers, includeEndRowDelimiter: true };
  }

  create(rows) {
    return CsvFile.write(fs.createWriteStream(this.path), rows, { ...this.writeOpts });
  }

  append(rows) {
    return CsvFile.write(fs.createWriteStream(this.path, { flags: 'a' }), rows, {
      ...this.writeOpts,
      // dont write the headers when appending
      writeHeaders: false,
    });
  }
}

const csvFile = new CsvFile({
  path: path.join(__dirname, './artists.csv'),
  headers: ['artistId', 'artistName', 'artistImgUrl'],
});

// constants for imageURL
const imageWidth = 1080;
const imageHeight = 720;
const collectionID = 2290052;
// Starting value for main id after first Id for demo
let artistId = 2;

const createMany = () => {
  const rows = [];
  for (let i = 0; i < 1000000; i += 1) {
    const artistName = `${faker.name.prefix()} ${faker.name.findName()} : ${faker.name.title()}`;
    const artistImgUrl = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${Math.floor(Math.random() * 151)}`;

    rows.push({ artistId, artistName, artistImgUrl });
    artistId += 1;
  }

  return csvFile.append(rows);
};

csvFile
  .create([{
    artistId: 1,
    artistName: 'Djay Van Der Bent',
    artistImgUrl: 'https://images.unsplash.com/photo-1530521787020-1c92aaf87aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80',
  }])
  .then(createMany)
  .then(createMany)
  .then(createMany)
  .then(createMany)
  .then(createMany)
  .then(createMany)
  .then(createMany)
  .then(createMany)
  .then(createMany)
  .then(createMany);
