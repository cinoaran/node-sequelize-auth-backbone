const Address = require('../models/Address');
const Client = require('../models/Client');

module.exports = {
  create: async (req, res, next) => {
    // Contents of req.value.body, req.value.body
    const {
      addressStreet,
      addressZip,
      addressCity,
      addressCountry, 
      clientKey,    
      clientCompany,
      clientPerson,
      clientEmail,
      clientPhone,
      clientFax,
      clientMobile,
      clientText,
      clientRange,
    } = req.value.body;

    const newAddress = Address.build({
      addressStreet,
      addressZip,
      addressCity,
      addressCountry,
    });    
  
    
    const newClient = Client.build({
      clientKey,
      clientCompany,
      clientPerson,
      clientEmail,
      clientPhone,
      clientFax,
      clientMobile,
      clientText,
      clientRange,
      addressId: createAddress.id
    });
    const client = await Client.findOne({
      where: {
        client_email: clientEmail
      }
    }); 
    if(client) {
      res.status(404).json({ message:'Client already registered!' });
    }else {
      await newAddress.save();    
      await newClient.save();
      res.json({ client: 'success', address: 'success' });
    }
    
  },
  signUp: async (req, res, next) => {    
    const {
      addressStreet,
      addressZip,
      addressCity,
      addressCountry, 
      clientKey,    
      clientCompany,
      clientPerson,
      clientEmail,
      clientPhone,
      clientFax,
      clientMobile,
      clientText,
      clientRange,
    } = req.value.body; 

    const client = await Client.findOne({
      where: {
        client_email: clientEmail
      }
    });

    if(client) {
      
      res.status(302).json({ message: 'Client already registered!' });
    
    } else {  

      const createAddress = await Address.create({
        address_street : addressStreet,
        address_zip : addressZip,
        address_city : addressCity,
        address_country : addressCountry,
      });  

      await Client.create({
        client_key : clientKey,
        client_company : clientCompany,
        client_person : clientPerson,
        client_email : clientEmail,
        client_phone : clientPhone,
        client_fax : clientFax,
        client_mobile : clientMobile,
        client_text : clientText,
        client_range : clientRange,
        addressId: createAddress.id
      });

      res.status(200).json({ message: 'We will send you your Registry Key to confirm your credentials!'});
    }
  },
  
  all: async (req, res, next) => {
    console.log('UsersController.signIn called!');
  },
  one: async (req, res, next) => {
    console.log('UsersController.secret called!');
  }
};
