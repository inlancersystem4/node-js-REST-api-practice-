const { DataTypes } = require('sequelize');
const sequelize = require("./index");

const Family = sequelize.define('family__list',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Name cannot be empty"
                }
            }
        },
        surname: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Surname cannot be empty"
                }
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[0-9]{10,15}$/,
                    msg: "Phone number must be between 10 and 15 digits"
                }
            }
        },
        homeAddress: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Home address cannot be empty"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: "Must be a valid email address"
                }
            }
        },
        is_parent: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        tableName: 'family__list',
        timestamps: false,
    },
);

console.log(Family === sequelize.models.family__list);

module.exports = Family;
