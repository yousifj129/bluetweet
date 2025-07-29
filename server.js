// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const morgan = require("morgan")
const methodOverride = require("method-override")
const conntectToDB = require('./config/db')
const authRoutes = require("./routes/auth.routes")
const session = require("express-session")
const passUserToView = require('./middleware/passUserToView')
const isSignedIn = require("./middleware/isSignedIn")








// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride("_method")); // Changes the method based on the ?_method
app.use(morgan("dev")) // logs the requests as they are sent to our sever in the terminal
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
); // uses the secret session code in the .env to encrypt the token
app.use(passUserToView) //used to set the res.locals.user for each ejs page
app.set("view engine", "ejs") //is more specific on which view engine we are using


// connect to database
conntectToDB()










app.use("/auth",authRoutes)
app.use(isSignedIn) //all your protected routes go below this middleware
// Routes go here








const port = process.env.PORT || 3000

const server = app.listen(port,()=>{
    console.log("Listening on port " + port)
}) // Listen on port 3000



server.on("error", (err) => { //console.log() an error if port 3000 is in use
  if (err.code === "EADDRINUSE") {
    console.error(` Port ${port} is already in use.`);
  } else {
    console.error(" Server error:", err.message);
  }
});