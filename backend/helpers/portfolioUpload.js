const multer = require('multer');
const path = require('path');

// Define supported image and video MIME types
const allowedMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'image/webp',
  'image/gif',
  'video/mp4',
  'video/mpeg',
  'video/quicktime',
  'video/x-msvideo', // .avi
  'video/x-matroska' // .mkv
];

// Define Multer storage for images and videos
const mediaStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const mediaPath = path.join(__dirname, '../public/portfolio');
    cb(null, mediaPath);
  },
  filename: (req, file, cb) => {
    const name = Date.now() + '-' + file.originalname.replace(/\s+/g, '-');
    cb(null, name);
  }
});

// File filter for images and videos
const mediaFilter = (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images and videos are allowed.'), false);
  }
};

// Multer upload middleware for images and videos
const portfolioUpload = multer({
  storage: mediaStorage,
  fileFilter: mediaFilter,
  limits: { fileSize: 100 * 1024 * 1024 } // Optional: limit size to 100MB
});

module.exports = { portfolioUpload };
