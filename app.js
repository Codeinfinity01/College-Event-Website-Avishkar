// import express
const express = require("express");

// import mysql 
const mysql = require("mysql"); 

// import path
const path = require("path");

const cookieParser = require("cookie-parser");

// import dotenv
const dotenv = require("dotenv");
const { env } = require("process");

dotenv.config({path : './.env'});

// starting express
const app = express();

// Creating Connection
const db = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER ,
    password : process.env.PASSWORD ,
    database : process.env.DATABASE 
});

// Connecting mysql
//  db.connect((error) => {
//      if(error){
//          console.log(error);
//      } else {
//          console.log("MYSQL connected.....")
//      }

//  });

// Join current directory with public directory
const publicDirectory = path.join(__dirname ,'./public');
app.use(express.static(publicDirectory));


// Parse URL Encoded bodies (as send by HTML form)
app.use(express.urlencoded({extended : false}));

// Parse JSON Bodies (as sent by API Clients)
app.use(express.json());
// app.use(cookieParser);

// Set View Engine
 app.set('view engine' , 'hbs');

// Define Routes
app.use('/' , require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.listen(5000 , ( )=>{
    console.log("Server started at port 5000");
});