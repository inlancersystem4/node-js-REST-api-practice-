const { default: AsyncQueue } = require('sequelize/lib/dialects/mssql/async-queue');
var db = require('../connection');
const { Where } = require('sequelize/lib/utils');
var User = db.user
const { Sequelize, Op } = require('sequelize')

var AddUser = async (req, res) => {
    // const jane = User.build({ firstName: 'Denish', lastName: "Borad" });
    const jane = await User.create({ firstName: 'Borad 1', lastName: "Denish 1" });
    // console.log(jane instanceof User); // true
    // console.log(jane.firstName); // "Jane"
    // await jane.save();
    console.log('Jane was saved to the database!');
    res.status(200).json(jane.toJSON())
}

var getUser = async (req, res) => {
    const data = await User.findAll({
        // First Way
        // attributes: ["id", ['firstName', 'First_Name'],
        // [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']],

        // Second way
        // attributes: ['id', [Sequelize.fn('COUNT', Sequelize.col('firstName')), 'count'], 'lastName']

        attributes: {
            exclude: ['createdAt'],
            include: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'Number_Count']],
        },
    })
    res.status(200).json({ data: data })
}

var getUserbyId = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ data: data })
}

var queryUser = async (req, res) => {
    const user = await User.create(
        {
            firstName: 'alice123',
            lastName: "borad",
        },
        // { fields: ['firstName'] },
    );
    res.status(200).json(user.toJSON())
}

var OperatorUserQuery = async (req, res) => {
    const user = await User.findAll({
        where: {
            id: {
                [Op.eq]: 2,
            },
        },
    });
    res.status(200).json({user:user})
}

module.exports = {
    AddUser, getUser, getUserbyId, queryUser, OperatorUserQuery
}