const express = require('express');
const bodyparser= require('body-parser')
const userController = require('../controllers/userController');
const router = express.Router();

router.use(express.json());

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended:true}));



router.get('/mail-verification',userController.mailVerification);

router.get('/reset-password', userController.resetPassword)
router.post('/reset-password', userController.updatePassword);
router.get('/reset-success', userController.resetSuccess);



module.exports = router;