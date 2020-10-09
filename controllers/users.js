const User = require('../models/User');

module.exports = {
  signUp: async (req, res, next) => {
    // 'Contents of req.value.body', req.value.body
    const { clientKey, userEmail, userName, userPassword } = req.value.body;
    const newUser = new User({
      clientKey,
      userEmail,
      userName,
      userPassword,
    });
  },
  signIn: async (req, res, next) => {
    // Check wether clientKey is in the users table
    

    // If so go for token
    console.log('UsersController.signIn called!');
  },
  secret: async (req, res, next) => {
    console.log('UsersController.secret called!');
  },
};
