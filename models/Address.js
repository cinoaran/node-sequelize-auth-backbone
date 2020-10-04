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
    addressStreet: {
      type: Sequelize.STRING,
    },
    addressZip: {
      type: Sequelize.STRING,
    },
    addressCity: {
      type: Sequelize.STRING,
    },
    addressCountry: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

module.exports = Address;
