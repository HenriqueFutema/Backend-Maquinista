const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Message", MessageSchema);