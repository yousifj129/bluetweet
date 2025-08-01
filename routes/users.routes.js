const router = require("express").Router()
const Post = require("../models/Post")
const cloudinary = require('cloudinary').v2;
const User = require("../models/User")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const dotenv = require("dotenv").config()
const fs = require('fs');
const isSignedIn = require("../middleware/isSignedIn");
const mongoose = require("mongoose");

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const posts = await Post.find({ creator: user._id }).populate("creator")

        res.render("./users/userProfile.ejs", { allPosts: posts, viewedUser: user })
    } catch (error) {
        console.log(error)
    }

})
router.get("/update/:id", isSignedIn, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user._id == req.session.user._id) {
            res.render("./users/userUpdate.ejs", { viewedUser: user })
        } else {
            res.redirect("/users/" + req.params.id)
        }
    } catch (error) {
        console.log(error)
    }
})

router.post("/follow/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user.followers.includes(req.session.user._id)) {
            user.followers.push(new mongoose.Types.ObjectId(req.session.user._id))
        }
        else {
            const index = user.followers.indexOf(req.session.user._id)
            user.followers.splice(index, 1)
        }

        await User.findByIdAndUpdate(req.params.id, user)
        res.redirect("/users/" + req.params.id)
    } catch (error) {
        console.log(error)
    }

})

router.put("/:id", upload.single('iconURL'), async (req, res) => {
    try {
        if(req.session.user._id != req.params.id) {
            res.redirect("/auth/login")
            return
        }
        const user = await User.findById(req.params.id)
        console.log(req.file)
        if (req.file) {
            const uploadResult = await cloudinary.uploader
                    .upload(
                        req.file.path,
                        {
                            resource_type: "image",
                            public_id: req.file.originalname
                        }
                    )
                    .catch((error) => {
                        console.log(error);
                    });
            console.log(uploadResult)
            user.iconURL = uploadResult.secure_url;
            await fs.rmSync(req.file.path, {
                force: true,
            });
        }
        user.username = req.body.username || user.username;
        user.description = req.body.description || user.description;
        await User.findByIdAndUpdate(req.params.id, user);
        req.session.user = user;
        res.redirect("/users/" + req.params.id)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router