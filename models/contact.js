// const { DataTypes } = require('sequelize');
// const sequelize = require('../connection');

module.exports = (sequelize, DataTypes) => {

    const Contact = sequelize.define(
        'contacts',
        {
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone_no: {
                type: DataTypes.STRING,
            },
            // user_id: DataTypes.INTEGER
        },
        {
            // Other model options go here
            // tableName: 'users',

            // This Remove Buil-In CreateAt and UpdatedAt Field
            // timestamps: false,

            // don't forget to enable timestamps!
            // timestamps: true,

            // I don't want createdAt
            // createdAt: false,

            // I want updatedAt to actually be called updateTimestamp
            // updatedAt: 'updated_at',
        },
    );
    return Contact;
}