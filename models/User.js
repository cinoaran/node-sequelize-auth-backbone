const Sequelize = require('sequelize');

const bcrypt = require('bcryptjs');

const db = require('../config/database');

const Client = require('./Client');

const User = db.define(
  'user',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already in use!',
      },
    },
    user_email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already in use!',
      },
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Password already in use!',
      },
    },
    user_status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { timestamps: true }
);

User.beforeCreate((user, options) => {
  return bcrypt
    .hash(user.userPassword, 10)
    .then((hash) => {
      user.userPassword = hash;
    })
    .catch((err) => {
      throw new Error();
    });
});

User.prototype.validPassword = async function (userPassword) {
  return await bcrypt.compare(user_password, this.userPassword);
};

User.belongsTo(Client, { foreignKey: 'clientId' });

module.exports = User;
