const express = require("express");
const { handleUserList, handleUserAdd } = require("../controllers/user");
const router = express.Router();


router.get("/user-list", handleUserList)
router.post("/user-add", handleUserAdd)


module.exports = router;