const express = require("express")
const app = express();
require('dotenv').config()


app.get("/", (req,res) => {
    res.send("Hello World")
    console.log("Home page");
    
})

app.get("/twitter", (req,res)=>{
    res.send("Twitter")
    console.log("Twitter clicked");
    
})

app.get("/login", (req,res) =>{
    res.send('<h1>Login Page</h1>')
    console.log("login credentials");
    
})

app.get("/youtube", (req,res) =>{
    res.send("<h2>Youtube home page</h2>")
})

app.listen(process.env.PORT, () =>{
    console.log(`Listening on ${process.env.PORT}`);
    
})