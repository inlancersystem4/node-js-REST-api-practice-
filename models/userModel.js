const { DataTypes } = require('sequelize');
const sequelize = require("./index");

const userTest = sequelize.define('userTest', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'userTest',
});

console.log(userTest === sequelize.models.userTest);

module.exports = userTest;
