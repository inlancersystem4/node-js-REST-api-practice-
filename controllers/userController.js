const userTest = require('../models/userModel');

async function getUserList(req, res) {
    try {
        const users = await userTest.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createUser(req, res) {
    try {
        console.log(req.body);
        const { firstName, lastName } = req.body;
        const newUser = await userTest.create({ firstName, lastName });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getUserList, createUser };
