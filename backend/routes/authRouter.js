const express = require('express');
const bodyparser= require('body-parser')
const userController = require('../controllers/userController');
const router = express.Router();

router.use(express.json());

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended:true}));



router.get('/mail-verification',userController.mailVerification);

router.get('/reset-password', userController.resetPassword)



module.exports = router;