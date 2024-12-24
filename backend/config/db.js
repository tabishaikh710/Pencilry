const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Configuring dotenv to load environment variables from the .env file
dotenv.config();

// Creating a connection pool to the database
const mySqlPool=mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

module.exports=mySqlPool;