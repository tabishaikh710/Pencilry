const express = require('express');
const illustrator_router = express.Router();
const multer = require('multer');
const path = require('path');
const bodyParser = require("body-parser");
const illustratorController= require('../controllers/illustratorController')
const role= require('../middleware/role');
// Storage configuration for documents
const docStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.ms-powerpoint') {
            cb(null, path.join(__dirname, '../public/portfolio'));
        } else {
            cb(new Error('Invalid file type for documents'), false);
        }
    },
    filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});


// File filter for document attachments
const attachmentsFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.ms-powerpoint') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type for documents'), false);
    }
};


// Multer upload configuration for job documents
const jobDoc = multer({
    storage: docStorage,
    fileFilter: attachmentsFilter
});

// ✅ Routes
illustrator_router.post('/create-illustrator',role('illustrator'),jobDoc.single('attachments'),illustratorController.createIllustrator);


module.exports = illustrator_router;
