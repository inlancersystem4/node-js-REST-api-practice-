const familyModel = require("../models/familyModel");

// Function to get the family list
async function getFamilyList(req, res) {
    try {
        const familyList = await familyModel.findAll();
        res.json(familyList);
    } catch (error) {
        console.error("Error fetching family list:", error);
        res.status(500).json({ error: "An error occurred while fetching the family list" });
    }
}

// Function to add a new family member
async function addFamilyMember(req, res) {
    try {
        const newFamilyMember = await familyModel.create(req.body);
        res.status(201).json(newFamilyMember);
    } catch (error) {
        console.error("Error adding family member:", error);
        res.status(500).json({ error: "An error occurred while adding the family member" });
    }
}

// Function to edit an existing family member
async function editFamilyMember(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await familyModel.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedFamilyMember = await familyModel.findOne({ where: { id: id } });
            res.status(200).json(updatedFamilyMember);
        } else {
            res.status(404).json({ error: "Family member not found" });
        }
    } catch (error) {
        console.error("Error updating family member:", error);
        res.status(500).json({ error: "An error occurred while updating the family member" });
    }
}

// Function to delete a family member
async function deleteFamilyMember(req, res) {
    try {
        const { id } = req.params;
        const deleted = await familyModel.destroy({
            where: { id: id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Family member not found" });
        }
    } catch (error) {
        console.error("Error deleting family member:", error);
        res.status(500).json({ error: "An error occurred while deleting the family member" });
    }
}

module.exports = { getFamilyList, addFamilyMember, editFamilyMember, deleteFamilyMember };
