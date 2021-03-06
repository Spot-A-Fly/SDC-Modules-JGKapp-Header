const cache = require('../cache/index.js');
const model = require('../models/index.js');

module.exports = {
  getArtistByNameOrId: (req, res) => {
    const { artistName, artistId } = req.query;

    if (artistName === undefined && artistId === undefined) {
      res.status(400).json({
        message: 'Bad request - must include artistName or artistId',
      });
    } else {
      let modelFunction = '';
      let param = '';
      let cacheKey = '';
      if (artistName !== undefined) {
        modelFunction = model.getArtistByName;
        param = artistName;
        cacheKey = `artistName=${artistName}`;
      } else if (artistId !== undefined) {
        modelFunction = model.getArtistById;
        param = artistId;
        cacheKey = `artistId=${artistId}`;
      }

      // With Cache
      cache.retrieveFromCache(cacheKey)
        .then((results) => {
          if (results) {
            res.status(200).json(results);
          } else {
            modelFunction(param)
              .then((artist) => {
                const messageObj = {
                  message: 'Successfully retrieved artist',
                  artist: artist.rows,
                };
                res.status(200).json(messageObj);
                return messageObj;
              })
              .then((value) => cache.addToCache(cacheKey, value))
              .catch((err) => res.status(400).json({
                message: 'Failed to find artist',
                error: err,
              }));
          }
        });

      // Without Cache
      // modelFunction(param)
      //   .then((artist) => res.status(200).json({
      //     message: 'Successfully retrieved artist',
      //     artist: artist.rows,
      //   }))
      //   .catch((err) => res.status(400).json({
      //     message: 'Failed to find artist',
      //     error: err,
      //   }));
    }
  },

  addNewArtist: (req, res) => {
    const { artistName, artistImgUrl } = req.body;
    if (artistName !== undefined && artistImgUrl !== undefined) {
      model.addNewArtist(artistName, artistImgUrl)
        .then(() => res.status(200).json({
          message: 'Successfully added new artist',
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to add new artist',
          error: err,
        }));
    } else {
      res.status(400).json({
        message: 'Bad request - must include artistName and artistImgUrl',
      });
    }
  },

  deleteArtistById: (req, res) => {
    const { artistId } = req.query;

    if (artistId !== undefined) {
      model.deleteArtistById(artistId)
        .then(() => res.status(200).json({
          message: 'Successfully deleted artist',
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to delete artist',
          error: err,
        }));
    } else {
      res.statu(400).json({
        message: 'Bad request - must include an artistId',
      });
    }
  },

  updateArtistById: (req, res) => {
    const { artistId, artistName, artistImgUrl } = req.body;

    if (artistId && artistName && artistImgUrl) {
      model.updateArtistById({ artistId, artistName, artistImgUrl })
        .then(() => res.status(200).json({
          message: 'Successfully updated artist',
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to update artist',
          error: err,
        }));
    } else {
      res.status(400).json({
        message: 'Bad request - must include artistId, artistName, and artistImgUrl',
      });
    }
  },
};
