const { check } = require("express-validator");

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







