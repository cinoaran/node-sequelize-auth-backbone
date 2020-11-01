const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Client = require('../models/Client');


const signToken = (user) => {
  return JWT.sign({
        iss: 'Drive Walk Order',
        sub: {userId : user.id, userEmail:user.user_email, userPerson:user.user_person},
        iat: new Date().getTime(), // issued at current Time
        exp: new Date().setDate(new Date().getDate() + 1) // exp time current time + 1 day
      }, process.env.SECRETKEY);
}


module.exports = {
  signIn: async (req, res, next) => { 
    const { userEmail, userPassword, userPerson } = req.value.body; 
    const user = await User.findOne({
      where: {
        user_person: userPerson,
        user_email: userEmail
      }
    });
    if(!user) {
      return res.status(404).json('Credentials do not match')    
    } else {      
      const token = await signToken(req.user);
      res.status(200).json({jwtToken:token, user:req.user});
    }

  },

  regKey: async (req, res, next) => {
    
    const { clientKey, userEmail, userPassword, userPerson } = req.value.body;

    const client = await Client.findOne({
        where: {
          client_key: clientKey
        }
      });      

      if(!client) {
        return res.status(404).json({ "message": 'Registry key do not match' })
      } else {  
        const user = await User.findOne({
            where: {
              user_email: userEmail
            }
          });
      if(user){
        res.status(404).json({ "message": 'User already exists'})
      } else {
        const user = await User.create({          
          user_email: userEmail,            
          user_password: userPassword,
          user_person : userPerson,
          clientId: client.id
        }); 
        res.status(200).json(user);
      }        
    }
  },

  dashboard: async (req, res, next) => {
    res.status(200).json({secret: "resource"})
  },
};
