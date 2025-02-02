const express = require('express');
const router = express.Router(); // Fix the typo and use Router()
const usreController = require('../controllers/userController');
router.use(express.json());

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.mimetype==='image/jpeg'|| file.mimetype==='image/png'){
        cb(null, path.join(__dirname, '../public/images'));
        }
    },
    filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});


const fileFilter= (req, file , cb)=>{
if (file.mimetype === 'image/jpeg'|| file.mimetype==='image/png') {

    cb(null, true);
    
}
else{
    cb(null, false);
}

}

const upload = multer({
    storage: storage,
    fileFilter
});

router.post('/register', upload.single('image'), usreController.userRegister);








module.exports = router;
