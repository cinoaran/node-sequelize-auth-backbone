const express = require('express');
const router = require('express-promise-router')();

const {
  validateBodyClient,
  schemasClient,
} = require('../helpers/yup_validation/routeHelpersClient');

const {
  validateBodyAddress,
  schemasAddress,
} = require('../helpers/yup_validation/routeHelpersAddress');

const ClientsController = require('../controllers/clients');

router
  .route('/create')
  .post(
    [
      validateBodyAddress(schemasAddress.addressSchemas),
      validateBodyClient(schemasClient.clientSchemas),
    ],
    ClientsController.create
  );

router.route('/all').get(ClientsController.all);

module.exports = router;
