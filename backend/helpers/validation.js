const { check , body } = require("express-validator");

exports.registerValidator = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Invalid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("mobile", "Modile no. is required").not().isEmpty(),

  check(
    "password",
    "Password must be greater than 6 cherecters , and contain at least one uppercase latter , and one number , and one special charecter"
  ).isStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }),

  check("image")
    .custom((value, { req }) => {
      if (
        req.file.mimetype === "image/jpeg" ||
        req.file.mimetype === "image/png"
      ) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("please upload an image jpeg, png"),
];

exports.sendmailVerificationValidator = [
  check("email", "please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
];

exports.passwordResetValidator = [
  check("email", "please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
];

exports.loginValidator= [
  check("email", "please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),

    check("password", "password is required").not().isEmpty(),
]


exports.updateProfileValidator = [
  check("name", "Name is required").not().isEmpty(),
 
  check("mobile", "Modile no. is required").not().isEmpty(),

  

  
];


exports.updateEmailleValidator = [
  check("email")
  .trim()
  .notEmpty().withMessage("Email is required") // Ensures email is provided
  .isEmail().withMessage("Invalid email format") // Validates email format
  
];



exports.createIllustratorValidator = [
  check('user')
    .notEmpty().withMessage('User ID is required')
    .isMongoId().withMessage('Invalid user ID'),

  check('bio')
    .optional()
    .isLength({ max: 500 }).withMessage('Bio cannot exceed 500 characters'),

  check('skills')
    .isArray({ min: 1 }).withMessage('At least one skill is required'),

  check('socialLinks.website').optional().isURL().withMessage('Invalid website URL'),
  check('socialLinks.behance').optional().isURL().withMessage('Invalid Behance URL'),
  check('socialLinks.dribbble').optional().isURL().withMessage('Invalid Dribbble URL'),
  check('socialLinks.instagram').optional().isURL().withMessage('Invalid Instagram URL'),

  check('hourlyRate')
    .optional()
    .isFloat({ min: 0 }).withMessage('Hourly rate must be a positive number'),

  check('availability')
    .optional()
    .isIn(['available', 'busy', 'unavailable']).withMessage('Invalid availability'),

  check('specialization')
    .notEmpty().withMessage('Specialization is required')
    .isMongoId().withMessage('Invalid specialization ID'),

  check('category')
    .notEmpty().withMessage('Category is required')
    .isMongoId().withMessage('Invalid category ID')
];



exports. updateIllustratorValidator = [
  check('bio')
    .optional()
    .isLength({ max: 500 }).withMessage('Bio cannot exceed 500 characters'),

  check('skills')
    .optional()
    .isArray({ min: 1 }).withMessage('Skills must be a non-empty array'),

  check('socialLinks.website').optional().isURL().withMessage('Invalid website URL'),
  check('socialLinks.behance').optional().isURL().withMessage('Invalid Behance URL'),
  check('socialLinks.dribbble').optional().isURL().withMessage('Invalid Dribbble URL'),
  check('socialLinks.instagram').optional().isURL().withMessage('Invalid Instagram URL'),

  check('hourlyRate')
    .optional()
    .isFloat({ min: 0 }).withMessage('Hourly rate must be a positive number'),

  check('availability')
    .optional()
    .isIn(['available', 'busy', 'unavailable']).withMessage('Invalid availability'),

  check('specialization')
    .optional()
    .isMongoId().withMessage('Invalid specialization ID'),

  check('category')
    .optional()
    .isMongoId().withMessage('Invalid category ID')
];


