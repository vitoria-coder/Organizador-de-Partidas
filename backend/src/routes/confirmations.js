const express = require('express');
const router = express.Router();
const confirmationController = require('../controllers/confirmation');
const authMiddleware = require('../middleware/auth');

router.post('/', confirmationController.createConfirmation);
router.get('/:match_id', confirmationController.getConfirmationsByMatchId);
router.delete('/:id',authMiddleware,confirmationController.deleteConfirmation);



module.exports = router;