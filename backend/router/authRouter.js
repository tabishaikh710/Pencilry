const express = require('express');
const router = express.Router(); // Correctly initialize the router
const authController = require('../controllers/authControllers');
const { registerValidator } = require('../helpers/validation');

// Define the register route
router.post('/clientRegister', registerValidator, authController.registerUserClient);

module.exports = router;