const Address = require('../models/Address');
const Client = require('../models/Client');
const User = require('../models/User');


module.exports = {
  create: async (req, res, next) => {
    // Contents of req.value.body, req.value.body
    const {
      address_street,
      address_zip,
      address_city,
      address_country, 
      client_key,    
      client_company,
      client_person,
      client_email,
      client_phone,
      client_fax,
      client_mobile,
      client_range,
    } = req.value.body;

    const newAddress = Address.build({
      address_street,
      address_zip,
      address_city,
      address_country,
    });    
    const createAddress = await newAddress.save();
    
    const newClient = Client.build({
      client_key,
      client_company,
      client_person,
      client_email,
      client_phone,
      client_fax,
      client_mobile,
      client_range,
      addressId: createAddress.id
    });
        
    await newClient.save();
    res.json({ client: 'success', address: 'success' });
  },
  signUp: async (req, res, next) => {

    // Contents of req.value.body, req.value.body from /clients/signup    
    const {
      address_street,
      address_zip,
      address_city,
      address_country, 
      client_key,    
      client_company,
      client_person,
      client_email,
      client_phone,
      client_fax,
      client_mobile,
      client_range,
    } = req.value.body;

    const newAddress = Address.build({
      address_street,
      address_zip,
      address_city,
      address_country,
    });    
    
    const createAddress = await newAddress.save();
    const newClient = Client.build({
      client_key,
      client_company,
      client_person,
      client_email,
      client_phone,
      client_fax,
      client_mobile,
      client_range,
      addressId: createAddress.id
    });   
    await newClient.save();
    res.json({ client: 'success', address: 'success' });
  },
  regKey: async (req, res, next) => {
    const { client_key, user_email, user_password } = req.value.body;
    const client = await Client.findOne({
        where: {
          client_key: client_key
        }
      });      

    if(!client) {
      return res.status(404).json({clientKey: 'false'})
    } else {  
      const user = await User.findOne({
        where: {
          user_email: user_email
        }
      });

      if(!user){    
          const user = await User.create({          
            user_email,            
            user_password,
            clientId: client.id
          }); 
          res.status(200).json({'regUser': user})

        } else {
            res.status(200).json({'regUser': 'User already exists'})
        }   
    }
  },
  all: async (req, res, next) => {
    console.log('UsersController.signIn called!');
  },
  one: async (req, res, next) => {
    console.log('UsersController.secret called!');
  }
};
