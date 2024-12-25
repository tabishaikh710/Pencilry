// Importing the Express module
const express = require('express');
const PostAJobRouter = require('./routes/PostjobRoutes')
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');
// Creating an instance of the Express application
const app = express();
// Defining the port number on which the server will listen
const port = process.env.Port;




// Configuring dotenv to load environment variables from the .env file
dotenv.config();

//midelwere
app.use(express.json());


app.use("/api/pj1/JobPost",PostAJobRouter);



// Defining a route for the root URL ('/')
app.get('/', (req, res) => {
    // Sending a response with an HTTP status of 200 (OK) and an HTML message
    res.status(200).send("<h1>Hello World</h1>");
});

mySqlPool.query("SELECT 1")
.then((result) => {

// Starting the server and making it listen on the defined port
app.listen(port, () => {
    // Logging a message to indicate that the server is running
    console.log('db connected');
    console.log(`Server is running on port ${port}`);
});


}).catch((e)=>{
 
console.log(e);


})


