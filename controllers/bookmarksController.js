const express = require('express');
const router = express.Router();
const Bookmark = require('../models/Bookmark');

// Index => GET all
router.get('/', async (req, res) => {
    // res.send("Bookmarks Controller");

    try {
        const found = await Bookmark.find({});
        res.status(200).json(found);

    } catch (error) {

        res.status(400).json({
            msg: error.message
        });
    }
});

// Show => GET by id
router.get('/title/:title', async (req, res) => {
    try {
        const found = await Bookmark.find({ title: req.params.title });
        res.status(200).json(found);

    } catch (err) {
        res.status(400).json({
            msg: err.message
        });
    }
});

// Create
router.post('/', async (req, res) => {
    try {
        const newBM = await Bookmark.create(req.body);
        res.status(200).json(newBM);

    } catch (err) {
        res.status(400).json({
            msg: err.message
        });
    }
});


module.exports = router