require('dotenv').config();
const express = require('express')
const bodyparse = require('body-parser')
const userRouter = require('./routers/user')
require('./connection')
// const User = require('./models/user_model')
// var userCtrl = require('./controllers/userController')
const app = express();

app.use(bodyparse.urlencoded({ extended: true }));
app.use(bodyparse.json());
app.use('/',userRouter);

// app.get('/', userCtrl.AddUser)
// app.get('/user', userCtrl.getUser)
// app.get('/user/:id', userCtrl.getUserbyId)

// User.drop()

// particular models create use
// User.sync()


// Force Fully Create Table
// User.sync({ force: true })

// Changes Update in Table
// Also use this
// User.sync({ alter: true })

// all existing models create use
// sequelize.sync({ force: true })

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});
