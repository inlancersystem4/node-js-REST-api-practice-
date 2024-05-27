// Model Definition
// Extending Model and calling init(attributes, options)

  // const { DataTypes, Model } = require('sequelize');
  // const sequelize =  require('../connection');
module.exports = (sequelize, DataTypes, Model) => {

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'users', // We need to choose the model name
  },
);

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true

// module.exports = User
return User
}



// Model Definition
// Calling sequelize.define(modelName, attributes, options)



// const { DataTypes } = require('sequelize');
// const sequelize = require('../connection');

// const User = sequelize.define(
//   'User',
//   {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     // Other model options go here
//     tableName: 'users',

//     // This Remove Buil-In CreateAt and UpdatedAt Field
//     // timestamps: false,

//     // don't forget to enable timestamps!
//     timestamps: true,

//     // I don't want createdAt
//     createdAt: false,

//     // I want updatedAt to actually be called updateTimestamp
//     updatedAt: 'updated_at',
//   },
// );

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

// module.exports = User