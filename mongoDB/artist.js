/* eslint-disable no-console */
const {
  Schema, model, connect, connection,
} = require('mongoose');

// Schema for database
const artistSchema = new Schema({
  name: String,
  header_img: String,
});

// Instantiation of mongoose model
const Artist = model('Artist', artistSchema);

// methods - each returns a thenable object
module.exports = {
  // eslint-disable-next-line camelcase
  saveNewArtist: ({ name, header_img }) => {
    const newArtist = new Artist({
      name,
      header_img,
    });

    return newArtist.save();
  },

  findArtistByName: (name) => Artist.findOne({ name }),

  findArtistById: (id) => Artist.findById({ id }),

  connectToDB: () => {
    const dbConnectionString = 'mongodb://localhost/artists';
    connect(dbConnectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    connection.on('connected', () => {
      console.log(`Mongoose default connection open to ${dbConnectionString}`);
    });

    connection.on('error', (err) => {
      console.log(`Mongoose default connection error: ${err}`);
    });

    connection.on('disconnected', () => {
      console.log('Mongoose default connection disconnected');
    });

    connection.on('exit', () => {
      connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
      });
    });
  },

  dropDB: () => connection.dropDatabase(),
};
