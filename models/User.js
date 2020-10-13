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
  /*   
  return bcrypt
    .hash(user.user_password, 10)
    .then((hash) => {
      user.user_password = hash;
    })
    .catch((err) => {
      throw new Error();
    }); */
});

User.prototype.validPassword = async function (user_password) { 
  try {
    return await bcrypt.compare(user_password, this.user_password);
  } catch (error) {
    throw new Error(error)
  }
  
};

User.belongsTo(Client, { foreignKey: 'clientId' });

module.exports = User;
