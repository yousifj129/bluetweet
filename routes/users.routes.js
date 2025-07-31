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
    const posts = await Post.find({creator:user._id}).populate("creator")
    
    res.render("./users/userProfile.ejs", {allPosts:posts, viewedUser:user})
})

router.post("/follow/:id", async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user.followers.includes(req.session.user._id))
    {
        user.followers.push(new mongoose.Types.ObjectId(req.session.user._id))
    }
    else{
        const index = user.followers.indexOf(req.session.user._id)
        user.followers.splice(index, 1)
    }

    await User.findByIdAndUpdate(req.params.id, user)
    res.redirect("/users/" + req.params.id)
})


module.exports = router