const express = require("express");
const router = express.Router();
const famliyController = require("../controllers/familyControllers");

router.post("/family-list", famliyController.getFamilyList)
router.post('/add-family', famliyController.addFamilyMember);
router.post('/edit-family', famliyController.editFamilyMember);
router.post('/delete-family', famliyController.deleteFamilyMember);


module.exports = router;