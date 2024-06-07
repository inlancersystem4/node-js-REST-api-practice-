const express = require("express");
var userCtrl = require('../controllers/userController')

const router = express.Router();



router.get('/', userCtrl.AddUser)
router.get('/user', userCtrl.getUser)
router.get('/user/:id', userCtrl.getUserbyId)
router.get('/query', userCtrl.queryUser)
router.get('/opuser', userCtrl.OperatorUserQuery)
router.get('/finders', userCtrl.findersUserQuery)
router.get('/getter-user', userCtrl.gettersUserQuery)
router.get('/setter-user', userCtrl.settersUserQuery)
router.get('/virtual-user', userCtrl.virtualUserQuery)



module.exports = router;