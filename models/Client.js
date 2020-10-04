const Sequelize = require('sequelize');

const db = require('../config/database');
const Address = require('./Address');
const User = require('./User');
const Client = db.define(
  'client',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    clientKey: {
      type: Sequelize.STRING,
    },
    clientCompany: {
      type: Sequelize.STRING,
    },
    clientPerson: {
      type: Sequelize.STRING,
    },
    clientEmail: {
      type: Sequelize.STRING,
    },
    clientPhone: {
      type: Sequelize.STRING,
    },
    clientFax: {
      type: Sequelize.STRING,
    },
    clientMobile: {
      type: Sequelize.STRING,
    },
    clientRange: {
      type: Sequelize.INTEGER,
      defaultValue: 300,
    },
  },
  { timestamps: true }
);

Client.belongsTo(Address, { foreignKey: 'addressId' });

module.exports = Client;
