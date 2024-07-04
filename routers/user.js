const express = require("express");
var userCtrl = require('../controllers/userController')

const router = express.Router();



router.get('/', userCtrl.BaseUser)
router.get('/add', userCtrl.AddUser)
router.get('/user', userCtrl.getUser)
router.get('/user/:id', userCtrl.getUserbyId)
router.get('/query', userCtrl.queryUser)
router.get('/opuser', userCtrl.OperatorUserQuery)
router.get('/finders', userCtrl.findersUserQuery)
router.get('/getter-user', userCtrl.gettersUserQuery)
router.get('/setter-user', userCtrl.settersUserQuery)
router.get('/virtual-user', userCtrl.virtualUserQuery)
router.get('/raw-queries', userCtrl.rawQueriesUser)
router.get('/one-to-one', userCtrl.oneToOneUser)
router.get('/one-to-many', userCtrl.oneToManyUser)
router.get('/many-to-many', userCtrl.manyToManyUser)
router.get('/paranoid', userCtrl.paranoidUser)
router.get('/loading', userCtrl.loadingUser)



module.exports = router;