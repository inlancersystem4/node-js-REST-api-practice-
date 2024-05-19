// app.js
require('dotenv').config();

const express = require("express");
const app = express();
// const bodyParser = require('body-parser');
// const connection = require("./connection");
const userRouter = require("./routers/user");

app.use(express.json());
app.use('/', userRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});