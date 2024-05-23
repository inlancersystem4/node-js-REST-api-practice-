require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const multer = require('multer');
const userRouters = require("./routers/userRouters");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const upload = multer();

app.use(upload.none());

app.use("/", userRouters);

const PORT = process.env.PORT || 2020;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});
