const Sequelize = require('sequelize');

const db = require('../config/database');

const Address = db.define(
  'address',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    address_street: {
      type: Sequelize.STRING,
    },
    address_zip: {
      type: Sequelize.STRING,
    },
    address_city: {
      type: Sequelize.STRING,
    },
    address_country: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

module.exports = Address;
