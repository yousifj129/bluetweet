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
    content:{
        type:String,
        required:[true, "can't leave post content as empty"]
    },
    images:{
        type:[String]
    },
    likes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User",
        default: 0
    },
    dislikes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User",
        default: 0
    },
    comments: [commentSchema]

})

const Post = mongoose.model("Post",postSchema)

module.exports = Post