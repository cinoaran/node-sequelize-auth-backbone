const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Client = require('../models/Client');
const Address = require('../models/Address');

const signToken = (user) => {
  return JWT.sign({
        iss: 'Drive Walk Order',
        sub: {userId : user.id, userEmail:user.user_email},
        iat: new Date().getTime(), // issued at current Time
        exp: new Date().setDate(new Date().getDate() + 1) // exp time current time + 1 day
      }, process.env.SECRETKEY);
}


module.exports = {
  signIn: async (req, res, next) => {

    // Generate token

    // req.user console.log('REQ_USER ', req.user);

    const token = signToken(req.user);
    res.status(200).json(token);

    /* const { client_key, user_email, user_name, user_password } = req.value.body;
    const user = await User.findOne({
            where: {
              user_email: user_email,
              user_name: user_name
            }
          }); 
    if(user && await user.validPassword(user_password)) { 
      if(!user.user_status) return res.status(401).json({userStatus: 'Set to false'});

      const token = signToken(user)   
      res.status(200).json({token});
    } else {      
      res.status(404).json({user: 'fail'})
    }  */
  },

  secret: async (req, res, next) => {
    res.status(200).json({secret: "resource"})
  },
};
