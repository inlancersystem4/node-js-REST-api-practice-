// controllers/userController.js
const User = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ id: userId });
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};


// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updates = req.body;

        const user = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};


// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findOneAndDelete({ id: userId });
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

