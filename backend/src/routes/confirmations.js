const express = require('express');
const router = express.Router();
const confirmationController = require('../controllers/confirmation');

router.post('/', confirmationController.createConfirmation);
router.get('/:match_id', confirmationController.getConfirmationsByMatchId);



module.exports = router;