const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Client = require('../models/Client');
const Address = require('../models/Address');


module.exports = {

  signUp: async (req, res, next) => {
    // Contents of req.value.body, req.value.body
  },

  signIn: async (req, res, next) => {

    const { client_key, user_email, user_name, user_password } = req.value.body;
    const newUser = await new User({
      client_key,
      user_email,
      user_name,
      user_password,
    });

    // Check wether clientKey is in the users table


    // If so go for token
    console.log('UsersController.signIn called!');
  },
  secret: async (req, res, next) => {
    console.log('UsersController.secret called!');
  },
};
