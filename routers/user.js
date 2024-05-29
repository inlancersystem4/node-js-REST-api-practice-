const express = require("express");
var userCtrl = require('../controllers/userController')

const router = express.Router();


router.get('/user', userCtrl.AddUser)
