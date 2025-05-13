const express = require('express');
const illustrator_router = express.Router();
const multer = require('multer');
const path = require('path');
const bodyParser = require("body-parser");
const illustratorController= require('../controllers/illustratorController')
const{createIllustratorValidator, updateIllustratorValidator}=require('../helpers/validation');
const role= require('../middleware/role');
const { portfolioUpload } = require('../helpers/portfolioUpload');
const auth= require('../middleware/auth');
// ✅ Routes
illustrator_router.post('/create-illustrator',role('illustrator'),createIllustratorValidator,illustratorController.createIllustrator);
illustrator_router.post('/update-illustrator',role('illustrator'),updateIllustratorValidator,illustratorController.updateIllustrator);
illustrator_router.get('/illustrator',illustratorController.getIllustrator);


module.exports = illustrator_router;
