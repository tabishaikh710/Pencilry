const User = require('../models/user'); // Renamed for clarity and convention
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const registerUserClient = async (req, res) => {
    try {
        // Validate input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: 'Validation errors occurred',
                errors: errors.array(),
            });
        }

        const { name, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                msg: 'Email already exists',
                errors: [{ msg: 'Email already exists' }],
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user instance
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save user to the database
        const savedUser = await newUser.save();

        return res.status(201).json({
            success: true,
            msg: 'User created successfully',
            data: savedUser,
        });
    } catch (error) {
        console.error(`Error registering user: ${error.message}`); // Log error
        return res.status(500).json({
            success: false,
            msg: 'Internal server error',
            error: error.message,
        });
    }
};

module.exports = { registerUserClient };
