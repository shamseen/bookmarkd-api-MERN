const express = require('express');
const router = express.Router();
const Bookmark = require('../models/Bookmark');

// Index
router.get('/', async (req, res) => {
    // res.send("Bookmarks Controller");

    try {
        const found = await Bookmark.find({});
        res.status(200).json(found);

    } catch (error) {

        res.status(400).json({
            msg: error.message
        })
    }
});

module.exports = router