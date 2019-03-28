const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/artists', {
  useMongoClient: true
});

const artistSchema = new Schema({
  name: String,
  header_img: String
});

let Artist = mongoose.model('Artist', artistSchema);

let save = artist => {

  let newArtist = new Artist({
    name: artist.name,
    header_img: artist.header_img
  })

  newArtist.save(err => {
    err ? console.log(err) : console.log('New artist added to database')
  })
}

let getArtist = () => {
  return new Promise((resolve, reject) => {
    Artist.find((err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

module.exports.save = save;
module.exports.getArtist = getArtist;

