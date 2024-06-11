var db = require('../connection');
var User = db.user
var Contact = db.contact
const { Sequelize, Op, QueryTypes, where } = require('sequelize');

var BaseUser = async (req, res) => {
    const jane = "Hello World";
    res.status(200).json(jane);
}

var AddUser = async (req, res) => {
    // const jane = User.build({ firstName: 'Denish', lastName: "Borad" });
    const jane = await User.create({ firstName: 'borad', lastName: "Denish" });
    // console.log(jane instanceof User); // true
    // console.log(jane.firstName); // "Jane"
    // await jane.save();
    console.log('Jane was saved to the database!');
    res.status(200).json(jane.toJSON());
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
    res.status(200).json({ data: data });
}

var getUserbyId = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ data: data });
}

var queryUser = async (req, res) => {
    const user = await User.create(
        {
            firstName: 'alice123',
            lastName: "borad",
        },
        // { fields: ['firstName'] },
    );
    res.status(200).json(user.toJSON());
}

var OperatorUserQuery = async (req, res) => {
    const user = await User.findAll({
        where: {
            // id:2,
            // id: {
            //     [Op.eq]: 2,
            // },
            // [Op.and]: [
            //     {id: 1},
            //     {firstName: "alice123"},
            // ]
        },
        order: [
            ['id', 'DESC']
        ],
        group: 'lastName',
        offset: 1,
        limit: 2
    });
    res.status(200).json({ user: user });
}

var findersUserQuery = async (req, res) => {
    const { count, rows } = await User.findAndCountAll({
        where: { lastName: 'borad' }
    });
    res.status(200).json({ user: rows, count: count });
}

var gettersUserQuery = async (req, res) => {
    const data = await User.findAll({
        where: { lastName: 'borad' }
    });
    res.status(200).json({ data: data });
}

var settersUserQuery = async (req, res) => {
    var data = {};
    var messages = {};
    try {
        data = await User.create({
            firstName: 'DENISH!!@@@',
            lastName: 'borad!!@@@'
        });
    } catch (e) {
        // console.log(e.errors)
        let message;
        e.errors.forEach(error => {
            switch (error.validatorKey) {
                case 'isAlpha':
                    message = error.message
                    // message = "Allow Only Letters!!"
                    break;
                case 'isLowercase':
                    message = "Allow Only Lowercase!!"
                    break;
            }
            messages[error.path] = message
        });
    }
    res.status(200).json({ data: data, messages: messages });
}

var virtualUserQuery = async (req, res) => {
    const data = await User.findAll({
        where: {
            lastName: "borad"
        }
    });
    res.status(200).json({ data: data });
}

var rawQueriesUser = async (req, res) => {
    // const users = await db.sequelize.query('SELECT * FROM `users`', {
    //     type: QueryTypes.SELECT,
    //     model: User,
    //     mapToModel: true,
    // });

    // const users = await db.sequelize.query('SELECT * FROM users WHERE id = ?', {
    //     replacements: ['3'],
    //     type: QueryTypes.SELECT,
    // });

    // const users = await db.sequelize.query('SELECT * FROM users WHERE id IN(:id)', {
    //     replacements: { id: ['1', '5', '11', '9'] },
    //     type: QueryTypes.SELECT,
    //   });

    // const users = await db.sequelize.query('SELECT * FROM users WHERE firstName LIKE :search_name', {
    //     replacements: { search_name: 'alice%' },
    //     type: QueryTypes.SELECT,
    // });

    const users = await db.sequelize.query(
        'SELECT * FROM users WHERE id = $id',
        {
            bind: { id: '5' },
            type: QueryTypes.SELECT,
        },
    );
    res.status(200).json({ data: users });
}

var oneToOneUser = async (req, res) => {
    // const data = await User.create({
    //     firstName: 'qqqqqqqqqq',
    //     lastName: 'borad'
    // });
    // if (data && data.id){
    //     await Contact.create({
    //         address: 'Address !!',
    //         phone_no: '1234567890',
    //         user_id: data.id
    //     });
    // }

    const data = await User.findAll({
        attributes: ['firstName', 'lastName'],
        include: [{
            model: Contact,
            as: 'ContactDetails',
            attributes: ['address', 'phone_no']
        }],
        where: { id: 11 }
    });

    // // reverse the attributes || foreignkey change in connection file
    // const data = await Contact.findAll({
    //     attributes: ['address', 'phone_no'],
    //     include: [{
    //         model: User,
    //         as: 'UserDetails',
    //         attributes: ['firstName', 'lastName']
    //     }],
    //     where: {id: 1}
    // });

    res.status(200).json({ data: data });
}

var oneToManyUser = async (req, res) => {

    // var data = await Contact.create({
    //     address: 'Hello My address This !!',
    //     phone_no: '1234567890',
    //     user_id: 5
    // });

    const data = await User.findAll({
        attributes: ['firstName', 'lastName'],
        include: [{
            model: Contact,
            as: 'ContactDetails',
            attributes: ['address', 'phone_no']
        }],
        // where: { id: 11 }
    });

    // // reverse the attributes || foreignkey change in connection file
    // const data = await Contact.findAll({
    //     attributes: ['address', 'phone_no'],
    //     include: [{
    //         model: User,
    //         as: 'UserDetails',
    //         attributes: ['firstName', 'lastName']
    //     }],
    //     where: {id: 3}
    // });


    res.status(200).json({ data: data });
}

var manyToManyUser = async (req, res) => {

    // const data = await User.create({
    //         firstName: 'ofroorkgkkfmroweo',
    //         lastName: 'erogegeomeori'
    //     });
    //     if (data && data.id){
    //         await Contact.create({
    //             address: 'Address ##@#@r!!',
    //             phone_no: '1234567890',
    //         });
    //     }

    const data = await User.findAll({
        attributes: ['firstName', 'lastName'],
        include: [{
            model: Contact,
            as: 'ContactDetails',
            attributes: ['address', 'phone_no']
        }],
        // where: { id: 11 }
    });

    // // reverse the attributes || foreignkey change in connection file
    // const data = await Contact.findAll({
    //     attributes: ['address', 'phone_no'],
    //     include: [{
    //         model: User,
    //         attributes: ['firstName', 'lastName']
    //     }],
    //     where: {id: 3}
    // });


    res.status(200).json({ data: data });
}

module.exports = {
    BaseUser, AddUser, getUser, getUserbyId, queryUser, OperatorUserQuery, findersUserQuery, gettersUserQuery,
    settersUserQuery, virtualUserQuery, rawQueriesUser, oneToOneUser, oneToManyUser, manyToManyUser
}