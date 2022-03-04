const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        typpe: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

userSchema.methods.generateJWT = function(){
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email,
    }, "secretKey")
}
const User = new mongoose.model('User', userSchema)

module.exports.User = User