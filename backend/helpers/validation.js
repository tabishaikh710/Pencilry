const { check } = require('express-validator');

exports.registerValidator = [
    // Validate name
    check('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters')
        .trim()
        .escape(),

    // Validate email
    check('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail(),

    // Validate password
    check('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter')
        .matches(/[a-z]/)
        .withMessage('Password must contain at least one lowercase letter')
        .matches(/[0-9]/)
        .withMessage('Password must contain at least one number')
        .matches(/[\W_]/)
        .withMessage('Password must contain at least one special character'),
];

// login validation
// **********************************************

exports.loginValidator = [


  // Validate email
  check('email')
      .notEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Please provide a valid email address')
      .normalizeEmail(),

  // Validate password
  check('password')
      .notEmpty()
      .withMessage('Password is required')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/[A-Z]/)
      .withMessage('Password must contain at least one uppercase letter')
      .matches(/[a-z]/)
      .withMessage('Password must contain at least one lowercase letter')
      .matches(/[0-9]/)
      .withMessage('Password must contain at least one number')
      .matches(/[\W_]/)
      .withMessage('Password must contain at least one special character'),
];














//postjob validator
// ****************************************************************************************



exports.postJobValidator = [
  // Validate title
  check('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 5, max: 100 })
    .withMessage('Title must be between 5 and 100 characters')
    .trim()
    .escape(),

  // Validate description
  check('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ min: 20 })
    .withMessage('Description must be at least 20 characters long')
    .trim()
    .escape(),

  // Validate skills
  check('skills')
    .isArray({ min: 1 })
    .withMessage('At least one skill is required')
    .custom((skills) => {
      if (skills.some(skill => typeof skill !== 'string')) {
        throw new Error('Skills must be an array of strings');
      }
      return true;
    }),

  // Validate project size
  check('projectSize')
    .notEmpty()
    .withMessage('Project size is required')
    .isIn(['Small', 'Medium', 'Large'])
    .withMessage('Project size must be Small, Medium, or Large'),

  // Validate project duration
  check('projectDuration')
    .notEmpty()
    .withMessage('Project duration is required')
    .isIn(['Less than a month', '1-3 months', '3-6 months', 'More than 6 months'])
    .withMessage('Invalid project duration'),

  // Validate experience level
  check('experienceLevel')
    .notEmpty()
    .withMessage('Experience level is required')
    .isIn(['Beginner', 'Intermediate', 'Expert'])
    .withMessage('Experience level must be Beginner, Intermediate, or Expert'),

  // Validate contract to hire
  check('contractToHire')
    .optional() // Optional field
    .isBoolean()
    .withMessage('Contract to hire must be a boolean value'),

  // Validate budget
  check('budget')
    .notEmpty()
    .withMessage('Budget is required')
    .isNumeric()
    .withMessage('Budget must be a number')
    .isFloat({ min: 0 })
    .withMessage('Budget must be a positive number'),

  // Validate document (optional field)
  check('document')
    .optional()
    .isString()
    .withMessage('Document must be a valid string'),
];
