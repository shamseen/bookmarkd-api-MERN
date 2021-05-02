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

// Show => GET by any prop
router.get('/:prop/:val', async (req, res) => {
    const filter = { [req.params.prop]: req.params.val };

    try {
        const found = await Bookmark.find(filter);
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

// Update => by any prop
router.put('/edit/:prop/:val', async (req, res) => {
    const filter = { [req.params.prop]: req.params.val };

    try {
        const updated = await Bookmark.findOneAndUpdate(
            filter,
            req.body,
            { new: true } // returns updated bookmark; could do old too
        );

        res.status(200).json(updated);

    } catch (err) {
        res.status(400).json({
            msg: err.message
        });
    }
});

// Delete => GET by any prop
router.delete('/:prop/:val', async (req, res) => {
    const filter = { [req.params.prop]: req.params.val };

    try {
        const deleted = await Bookmark.findOneAndDelete(filter);
        res.status(200).json(deleted);

    } catch (err) {
        res.status(400).json({
            msg: err.message
        });
    }
});


module.exports = router