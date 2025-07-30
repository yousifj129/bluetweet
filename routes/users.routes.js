const router = require("express").Router()
const Post = require("../models/Post")
const cloudinary = require('cloudinary').v2;
const User = require("../models/User")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const dotenv = require("dotenv").config()
var fs = require('fs');
const isSignedIn = require("../middleware/isSignedIn");
const mongoose  = require("mongoose");

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id)
    const posts = await Post.find({creator:user._id})
    
    res.render("./users/userProfile.ejs", {allPosts:posts, user:user})
})

module.exports = router