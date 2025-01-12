const express = require('express');
const router = express.Router(); // Correctly initialize the router
const authController = require('../controllers/authControllers');
const postAuthController = require('../controllers/postAJobController');
const { registerValidator, postJobValidator, loginValidator } = require('../helpers/validation');

// Define the register route
router.post('/Register', registerValidator, authController.registerUserClient);
router.post('/Login', loginValidator, authController.userlogin);
router.post('/post_job', postJobValidator,postAuthController.postJobController );

module.exports = router;