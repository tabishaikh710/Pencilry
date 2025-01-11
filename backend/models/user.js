const mongoose = require('mongoose');

// Client Schema Definition
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address',
        ],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    // confirmPassword: {
    //     type: String,
    //     required: [true, 'Please confirm your password'],
    //     validate: {
    //         validator: function (value) {
    //             return value === this.password;
    //         },
    //         message: 'Passwords do not match',
    //     },
    // },
    role: {
        type: Number,
        enum: [0, 1, 2, 3], // Enforce specific role values
        default: 0, // 0 -> Client, 1 -> Illustrator, 2 -> Sub-Admin, 3 -> Admin
    },
});

// Middleware to remove confirmPassword field before saving to the database
// clientSchema.pre('save', function (next) {
//     this.confirmPassword = undefined;
    // next();
// });

// Export the Client model
module.exports = mongoose.model('User', UserSchema);
