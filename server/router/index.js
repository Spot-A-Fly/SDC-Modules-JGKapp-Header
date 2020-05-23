const router = require('express').Router();
const artistControllers = require('../controllers/index.js');

router.get('/', artistControllers.getArtistByNameOrId);

router.post('/', artistControllers.addNewArtist);

router.delete('/', artistControllers.deleteArtistById);

router.put('/', artistControllers.updateArtistById);

module.exports = router;
