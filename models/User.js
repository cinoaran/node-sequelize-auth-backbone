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
    user_email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already in use!',
      },
    },
    user_person: {
      type: Sequelize.STRING,
      allowNull: false,      
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

User.beforeCreate(async (user) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(user.user_password, salt);
    user.user_password = passwordHash;    
    
  } catch (error) {
    console.error(error);
  }
});

User.prototype.validPassword = async function (userPassword) {   
  try {
    return await bcrypt.compare(userPassword, this.user_password);
  } catch (error) {
    throw new Error(error)
  }
  
};

User.belongsTo(Client, { foreignKey: 'clientId' });

module.exports = User;
