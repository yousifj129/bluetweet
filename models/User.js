const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "username is required" ],
        unique: [true, "username already taken please pick another username"]
    },
    password:{
        type:String,
        required:[true, "password is required"]
    },
    iconURL:{
        type:String,
        required: false
    },
    followers:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        require: false
    }
})

const User = mongoose.model("User",userSchema)

module.exports = User