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

db.user.hasOne(db.contact, {foreignKey: 'user_id', as: 'ContactDetails'})
db.contact.belongsTo(db.user)

db.sequelize.sync({ alter: true })
module.exports = db;