const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.use(express.json());



router.get('/mail-verification',userController.mailVerification);





module.exports = router;