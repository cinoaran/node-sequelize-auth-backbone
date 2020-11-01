const Sequelize = require('sequelize');

const db = require('../config/database');
const Address = require('./Address');



const Client = db.define(
  'client',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    client_key: {
      type: Sequelize.STRING,
      defaultValue: new Date().getTime() + '-EXT',
    },
    client_company: {
      type: Sequelize.STRING,
      allowNull: false,
    },    
    client_email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    client_phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    client_fax: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    client_mobile: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    client_text: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    client_range: {
      type: Sequelize.INTEGER,
      defaultValue: 300,
    },
  },
  { timestamps: true }
);

Client.belongsTo(Address, { foreignKey: 'addressId' });

module.exports = Client;
