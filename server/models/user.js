const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwd: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema)
