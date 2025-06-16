const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matches');

//ROTASHTTP
router.post('/', matchController.createMatch);
router.get('/', matchController.getAllMatches);
router.get('/:id', matchController.getMatchById);
router.put(':id', matchController.updateMatch);
router.delete('/:id', matchController.deleteMatch);

module.exports = router;