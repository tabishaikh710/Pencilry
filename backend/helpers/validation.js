const {check} = require('express-validator');

exports.registerValidator=[
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email','Invalid email').normalizeEmail({gmail_remove_dots:true} ).isEmail(),
    
    check('password').isLength({min:8}).withMessage('Password must be at least'),

]