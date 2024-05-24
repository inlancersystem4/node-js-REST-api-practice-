require('dotenv').config()

const express = require("express");
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const app = express();
const connection = require("./connection")
const routers = require("./routers")

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(upload.none())


app.use("/", routers.famliyRouter)


const PORT = process.env.PORT || 0;

app.listen(PORT, function (err) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`server run on this port ${PORT}`);
    }
})

