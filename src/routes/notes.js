const express = require('express');
const router = express.Router();

const Note = require("../models/Notes")

router.post("/list", async function (req, res) {
    var notes = await Note.find({ userId: req.body.userId });
    res.json(notes);
})

router.post("/add", async function (req, res) {
    await Note.deleteOne({ id: req.body.id });
    const newNotes = new Note({
        id: req.body.id,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content
    })
    await newNotes.save();
    const response = { messsage: "New Note Created" }
    res.json(response);
})

router.post("/delete", async function (req, res) {
    await Note.deleteOne({ id: req.body.id });
    const response = { messsage: "Note Deleted" }
    res.json(response);
})

module.exports = router;