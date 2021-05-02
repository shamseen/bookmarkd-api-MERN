const { Schema, model } = require('mongoose');

const bookmarkSchema = new Schema({
    title: { type: String, required: true, unique: false },
    url: { type: String, required: true, unique: false }
})

module.exports = model('Bookmark', bookmarkSchema);