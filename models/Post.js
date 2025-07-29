const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    commenter:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User",
        required: true
    },
    content:{
        type:String,
        required: true
    }
})

const postSchema = new mongoose.Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true, "creator is required" ]
    },
    title:{
        type: String,
        required: [true, "can't post without title"]
    },
    content:{
        type:String,
        required:[true, "can't leave post content as empty"]
    },
    image:{
        type:String
    },
    likes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User"
    },
    dislikes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User"
    },
    comments: [commentSchema]

}, {timestamps: true})

const Post = mongoose.model("Post",postSchema)

module.exports = Post