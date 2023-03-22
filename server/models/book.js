const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    editeur: {
        type: String,
        required: true
    },
    date_publication: {
        type: Date,
        default: Date.now(),
        required: false
    },
    image: {
        type: String,
        required: false
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required : false
    }
});

module.exports = mongoose.model("Books", bookSchema);
