const express = require('express');
const app = express();

const mongoose = require("mongoose");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://ishit:root@cluster0.a2sqlta.mongodb.net/notesdb").then(function() {
    app.get("/", function (req, res) {
        const response = {messsage : "Notes Api works"}
        res.json(response);
    })
    const noteRouter = require('./routes/notes')
    app.use("/notes",noteRouter);
   
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log('Server Start at 5000')
});