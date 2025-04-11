const express = require('express');
const router = express.Router(); // Fix the typo and use Router()
const userController = require('../controllers/userController');
const {registerValidator, sendmailVerificationValidator,passwordResetValidator, loginValidator, updateProfileValidator ,updateEmailleValidator}=require('../helpers/validation');
const postControllers=require('../controllers/postControllers');
router.use(express.json());

const path = require('path');
const multer = require('multer');
const auth= require('../middleware/auth');
const Post= require('../middleware/post');
  
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

// Storage configuration for documents
const docStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.ms-powerpoint') {
            cb(null, path.join(__dirname, '../public/jobdoc'));
        } else {
            cb(new Error('Invalid file type for documents'), false);
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
// File filter for document attachments
const attachmentsFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.ms-powerpoint') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type for documents'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter
});

// Multer upload configuration for job documents
const jobDoc = multer({
    storage: docStorage,
    fileFilter: attachmentsFilter
});
router.post('/register', upload.single('image'),registerValidator, userController.userRegister);

router.post('/send-mail-verification',sendmailVerificationValidator,userController.sendmailVerification)

router.post('/forgot-password',passwordResetValidator,userController.forgotPassword);

router.post('/login',loginValidator,userController.loginUser );


//authenticated routs

router.get('/profile',auth,userController.userProfile );
router.post('/update-profile', auth, upload.single('image'), updateProfileValidator, userController.updateProfile);
router.post('/update-Email' , auth ,updateEmailleValidator ,userController.updateEmail);
router.get('/refresh-token' , auth  ,userController.refreshToken);
router.get('/logout' , auth  ,userController.logout);
router.post('/post_job', Post, jobDoc.single('attachments'), postControllers.postAjob);
module.exports = router;
