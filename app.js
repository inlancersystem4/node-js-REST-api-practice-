require('dotenv').config();

const express = require("express");
const app = express();
const userRouters = require("./routers/userRouters");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use user routers
app.use("/", userRouters);

// Start the server
const PORT = process.env.PORT || 2020;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});
