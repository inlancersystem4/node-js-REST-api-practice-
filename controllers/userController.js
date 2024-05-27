const { default: AsyncQueue } = require('sequelize/lib/dialects/mssql/async-queue');
var db = require('../connection');
const { Where } = require('sequelize/lib/utils');
var User = db.user

var AddUser = async (req, res) => {
    // const jane = User.build({ firstName: 'Denish', lastName: "Borad" });
    const jane = await User.create({ firstName: 'Borad', lastName: "Denish" });
    console.log(jane instanceof User); // true
    console.log(jane.firstName); // "Jane"
    // await jane.save();
    console.log('Jane was saved to the database!');
}

var getUser = async (req, res) => {
    const data = await User.findAll({})
    res.status(200).json({data:data})
}

var getUserbyId = async (req, res) => {
    const data = await User.findOne({
        where: {
            id:req.params.id
        }
    })
    res.status(200).json({data:data})
}

module.exports = {
    AddUser, getUser, getUserbyId
}