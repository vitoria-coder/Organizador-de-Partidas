const express = require('express');
const router = express.Router();
const confirmationController = require('../controllers/confirmation');

router.post('/', confirmationController.confirmPresence);
router.get('/:matchId', confirmationController.getConfirmationsByMatch);



module.exports = router;