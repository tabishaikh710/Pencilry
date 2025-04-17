const express= require('express');
const category_router= express();
const multer = require('multer');
const path = require('path');
const bodyparser = require("body-parser")
category_router.use(bodyparser.json());
category_router.use(bodyparser.urlencoded({extended:true}));
const category_controller = require('../controllers/categoryController');
const auth = require('../middleware/auth');


// Storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/catImages')); // Save in public/images
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  });
  
  // File filter to accept only JPEG/PNG
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG and PNG formats are allowed'), false);
    }
  };
  
  // Multer upload middleware
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
      fileSize: 5 * 1024 * 1024, // 5 MB max
    }
  });
  

category_router.post('/add-category',auth ,upload.single('image'), category_controller.createCategory);



module.exports=category_router;