const User = require('../models/User');
const Client = require('../models/Client');
const Address = require('../models/Address');

require('dotenv').config();

module.exports = () => {
  Client.count()
    .then((countedClient) => {
      if (countedClient < 1) {
        console.log('######### countedClient #########', countedClient);
        Address.create({
          addressStreet: process.env.ADDRESSSTREET,
          addressZip: process.env.ADDRESSZIP,
          addressCity: process.env.ADDRESSCITY,
          addressCountry: process.env.ADDRESSCOUNTRY,
        })
          .then((address) => {
            Client.create({
              clientKey: process.env.CLIENTKEY,
              clientCompany: process.env.CLIENTCOMPANY,
              clientPerson: process.env.CLIENTPERSON,
              clientEmail: process.env.CLIENTEMAIL,
              clientPhone: process.env.CLIENTPHONE,
              clientFax: process.env.CLIENTFAX,
              clientMobile: process.env.CLIENTMOBILE,
              clientRange: process.env.CLIENTRANGE,
              addressId: address.id,
            })
              .then((client) =>
                console.log('Client Created ' + client.clientPerson)
              )
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};
