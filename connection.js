const { Sequelize, DataTypes, Model } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  logging: false,
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize


db.user = require('./models/user_model')(sequelize, DataTypes, Model)
db.contact = require('./models/contact')(sequelize, DataTypes)

// hasOne Relationship
// db.user.hasOne(db.contact, {foreignKey: 'user_id', as: 'ContactDetails'})

// hasMany Relationship
// db.user.hasMany(db.contact, {foreignKey: 'user_id', as: 'ContactDetails'})

// revers processing {foreignKey: 'user_id', as: 'UserDetails'} this used
// db.contact.belongsTo(db.user, {foreignKey: 'user_id', as: 'UserDetails'})

// db.user.belongsToMany(db.contact, { through: 'user_contacts' });
// db.contact.belongsToMany(db.user, { through: 'user_contacts' });

db.user.hasMany(db.contact)
db.contact.belongsTo(db.user)

db.sequelize.sync({ alter: true })
module.exports = db;