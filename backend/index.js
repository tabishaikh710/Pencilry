const express = require('express');
const app = express();
const env=require("dotenv");
env.config();
const mongoose = require('mongoose');
const MongoDB=process.env.DATA_BASE;
const authRoute= require('./router/authRouter');

port= process.env.PORT;
// Connect to MongoDB
mongoose.connect(MongoDB)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));



// Middleware
app.use(express.json());
app.use('/api', authRoute); // Mount the route at /api



app.listen(port,()=>{
    console.log('Server is running on port 3000');
})



