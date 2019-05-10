/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;
// const MongoURI = process.env.DB_URI || 'mongodb://database/artists';
const MongoURI = process.env.MONGODB_URI || 'mongodb://localhost/artists';

mongoose.connect(MongoURI, { useNewUrlParser: true });
const collection = mongoose.connection;

// Schema for database
const artistSchema = new Schema({
  name: String,
  header_img: String,
});

// Instantiation of mongoose model
const Artist = mongoose.model('Artist', artistSchema);

// Model for GET by id
const getArtist = (id) => {
  if (id === 'demo') {
    return Artist.findOne({name: 'Djay Van Der Bent'});
  }
  return Artist.findById(id, 'name header_img -_id').exec();
};

const getDemoArtist = (name) => {
  return Artist.findOne({ name });
};

// Model for POST
const save = (artist) => {
  const newArtist = new Artist({
    name: artist.name,
    header_img: artist.header_img,
  });

  newArtist.save((err) => {
    // eslint-disable-next-line no-unused-expressions
    err ? console.log(err) : console.log('New artist added to database')
  });
};

module.exports.save = save;
module.exports.getArtist = getArtist;
module.exports.getDemoArtist = getDemoArtist;
module.exports.collection = collection;
