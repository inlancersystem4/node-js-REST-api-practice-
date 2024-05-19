const handleUserList = (req, res) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" }
    ];

    // Send the users list as a response
    res.json(users);
};

const handleUserAdd =  (req, res) => {
    console.log("call");

    // Access the request payload
    const newUser = req.body;
    console.log(newUser);

    // Example response back to client
    res.status(201).json({ message: "User added", user: newUser });
};


module.exports = { handleUserList, handleUserAdd };
