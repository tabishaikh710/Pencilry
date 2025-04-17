const express = require('express');
const subcategory_router = express.Router();
const multer = require('multer');
const path = require('path');
const bodyParser = require("body-parser");

subcategory_router.use(bodyParser.json());
subcategory_router.use(bodyParser.urlencoded({ extended: true }));

const auth = require('../middleware/auth');
const subCategoryController = require('../controllers/subCategoryController');

// 📦 Multer config for subcategory image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/subImages')); // subImages folder
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG and PNG formats are allowed'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB
  }
});

// ✅ Routes
subcategory_router.post('/add-subcategory',auth,upload.single('image'),subCategoryController.addSubCategory);



module.exports = subcategory_router;
