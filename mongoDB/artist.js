/* eslint-disable no-console */
const {
  Schema, model, connect, connection,
} = require('mongoose');

// Schema for database
const artistSchema = new Schema({
  artistId: Number,
  artistName: String,
  artistImgUrl: String,
});

// Instantiation of mongoose model
const Artist = model('Artist', artistSchema);

module.exports = {
  Artist,

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
};
