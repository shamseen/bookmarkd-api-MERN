const { Schema, model } = require('mongoose');

const bookmarkSchema = new Schema({
    title: { type: String, required: true, unique: false },
    url: { type: String, required: true, unique: false }
})

// NOTE: mongoose/mongo adds _id & _v

module.exports = model('Bookmark', bookmarkSchema);