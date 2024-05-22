const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/user-list", userController.getUserList);
router.post("/add-user", userController.createUser);

module.exports = router;
