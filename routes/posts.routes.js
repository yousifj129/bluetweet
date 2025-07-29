const router = require("express").Router()
const User = require("../models/User")
const Post = require("../models/Post")
const cloudinary = require('cloudinary').v2;
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const dotenv = require("dotenv").config()
var fs = require('fs');
const isSignedIn = require("../middleware/isSignedIn")
// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET // Click 'View API Keys' above to copy your API secret
});


router.get("/", async (req, res) => {
    const allPosts = await Post.find().populate("creator")
    res.render("./posts/feed.ejs", { allPosts: allPosts })
})


router.get("/new", isSignedIn, async (req, res) => {
    res.render("./posts/newPost.ejs")
})
router.get("/delete/:id", isSignedIn, async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (req.session.user._id == post.creator) {
        await Post.findByIdAndDelete(req.params.id)
    }
    res.redirect("/posts/")
})
router.post("/new", upload.single('file'), async (req, res) => {
    if (req.session.user) {
        let post = req.body
        if (req.file) {
            const uploadResult = await cloudinary.uploader
                .upload(
                    `./uploads/${req.file.filename}`,
                    {
                        resource_type: "image",
                        public_id: req.file.originalname
                    }
                )
                .catch((error) => {
                    console.log(error);
                });
            await fs.rmSync(`./uploads/${req.file.filename}`, {
                force: true,
            });
            post.image = uploadResult.secure_url
        }

        post.file = null
        post.creator = req.session.user._id

        await Post.create(post)
        res.redirect("/posts/")
    }
    else {
        res.redirect("/auth/login")
    }
})
router.get("/update/:id", async (req, res) => {
    const post = await Post.findById(req.params.id)
    console.log(post)
    res.render("./posts/updatePost.ejs", { post: post })
})

router.put("/:id", upload.single('file'), async (req, res) => {
    const triedPost = await Post.findById(req.params.id).populate()
    if (req.session.user._id == triedPost.creator._id) {
        let post = req.body
        await Post.findByIdAndUpdate(req.params.id, post)
        res.redirect("/posts/")
    }
    else {
        res.redirect("/auth/login")
    }
})


module.exports = router