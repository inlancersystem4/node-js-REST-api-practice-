const express = require("express");
var userCtrl = require('../controllers/userController')

const router = express.Router();



router.get('/', userCtrl.AddUser)
router.get('/user', userCtrl.getUser)
router.get('/user/:id', userCtrl.getUserbyId)



module.exports = router;