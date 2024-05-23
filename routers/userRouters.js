const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user-list", userController.getUserList);
router.post("/add-user", userController.createUser);

module.exports = router;
