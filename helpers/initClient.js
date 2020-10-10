const User = require('../models/User');
const Client = require('../models/Client');
const Address = require('../models/Address');

require('dotenv').config();

module.exports = () => {
  Client.count()
    .then((countedClient) => {
      if (countedClient < 1) {        
        Address.create({
          address_street: process.env.ADDRESSSTREET,
          address_zip: process.env.ADDRESSZIP,
          address_city: process.env.ADDRESSCITY,
          address_country: process.env.ADDRESSCOUNTRY,
        })
          .then((address) => {
            Client.create({
              client_key: process.env.CLIENTKEY,
              client_company: process.env.CLIENTCOMPANY,
              client_person: process.env.CLIENTPERSON,
              client_email: process.env.CLIENTEMAIL,
              client_phone: process.env.CLIENTPHONE,
              client_fax: process.env.CLIENTFAX,
              client_mobile: process.env.CLIENTMOBILE,
              client_range: process.env.CLIENTRANGE,
              addressId: address.id,
            })
              .then((client) =>
                console.log('Client Created ' + client)
              )
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};
