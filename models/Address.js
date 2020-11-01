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
      allowNull: false
    },
    address_zip: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address_city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address_country: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  { timestamps: false }
);

module.exports = Address;
