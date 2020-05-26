const db = require('../../database/index.js');

module.exports = {
  getArtistByName: (artistName) => {
    const sqlString = 'SELECT * FROM artists WHERE artist_name LIKE $1';

    return db.query(sqlString, [artistName]);
  },

  getArtistById: (artistId) => {
    const sqlString = 'SELECT * FROM artists WHERE artist_id = $1';

    return db.query(sqlString, [artistId]);
  },

  addNewArtist: (artistName, artistImgUrl) => {
    const sqlString = 'INSERT INTO artists(artist_id, artists_img_url) VALUES ($1, $2)';

    return db.query(sqlString, [artistName, artistImgUrl]);
  },

  deleteArtistById: (artistId) => {
    const sqlString = 'DELETE FROM artists WHERE artist_id = $1';

    return db.query(sqlString, [artistId]);
  },

  updateArtistById: ({ artistId, artistName, artistImgUrl }) => {
    const sqlString = 'UPDATE artists SET artist_name = $2, artists_img_url = $3 WHERE artist_id = $1';

    return db.query(sqlString, [artistId, artistName, artistImgUrl]);
  },
};
