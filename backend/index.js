require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const userRoute = require('./routes/userRouter');
const authRoute = require('./routes/authRouter');
const category_route=require('./routes/categoryRouter');
const subcategory_route=require('./routes/subCategoryRouter')
const illustrator_route=require('./routes/illustretorRouter')
const port = process.env.PORT || 4000; // Fix: Set a default port
const app = express();



app.set('view engine', 'ejs');
app.set('views', './views');

mongoose.connect('mongodb://127.0.0.1:27017/pencilry')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
// Routes
app.use('/api', userRoute);
app.use('/', authRoute);

// category_route
app.use('/api',category_route);
// subcategory_route
app.use('/api',subcategory_route);

app.use('/api',illustrator_route);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
