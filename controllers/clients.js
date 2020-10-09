const Address = require('../models/Address');
const Client = require('../models/Client');
const User = require('../models/User');

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
      clientRange,
    } = req.value.body;

    const newAddress = Address.build({
      addressStreet,
      addressZip,
      addressCity,
      addressCountry,
    });

    const createAddress = await newAddress.save();
    const newClient = Client.build({
      clientKey,
      clientCompany,
      clientPerson,
      clientEmail,
      clientPhone,
      clientFax,
      clientMobile,
      clientRange,
      addressId: createAddress.id
    });
        
    await newClient.save();
    res.json({ client: 'success', address: 'success' });
  },
  all: async (req, res, next) => {
    console.log('UsersController.signIn called!');
  },
  one: async (req, res, next) => {
    console.log('UsersController.secret called!');
  },
};
