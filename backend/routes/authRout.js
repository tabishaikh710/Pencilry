const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Email verification route
router.get('/mail-verification', userController.mailVerification);


module.exports = router;
