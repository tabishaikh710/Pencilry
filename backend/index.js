require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const userRoute = require('./routes/userRouter');

const port = process.env.PORT || 4000; // Fix: Set a default port
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/pencilry')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.use(express.json());
app.use('/api', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
