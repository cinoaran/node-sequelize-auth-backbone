const Address = require('../models/Address');
const Client = require('../models/Client');

module.exports = {
  create: async (req, res, next) => {
    // 'Contents of req.value.body', req.value.body
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

    const newAddress = new Address({
      addressStreet,
      addressZip,
      addressCity,
      addressCountry,
    });

    const newClient = new Client({
      clientKey,
      clientCompany,
      clientPerson,
      clientEmail,
      clientPhone,
      clientFax,
      clientMobile,
      clientRange,
    });
    await Address.create({ newAddress });
    res.json({ address: 'created' });
    await Client.create({ newClient });
    res.json({ client: 'created' });
  },
  all: async (req, res, next) => {
    console.log('UsersController.signIn called!');
  },
  one: async (req, res, next) => {
    console.log('UsersController.secret called!');
  },
};
