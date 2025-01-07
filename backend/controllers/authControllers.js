const Client = require('../models/client');
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
        const existingUser = await Client.findOne({ email });
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
        const newClient = new Client({
            name,
            email,
            password: hashedPassword,
        });

        // Save user to the database
        const savedClient = await newClient.save();

        return res.status(201).json({
            success: true,
            msg: 'User created successfully',
            data: savedClient,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: 'Internal server error',
            error: error.message,
        });
    }
};

module.exports = { registerUserClient };
