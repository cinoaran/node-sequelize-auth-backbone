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

const {
  validateBodyUser,
  authSchemas,
} = require('../helpers/yup_validation/routeHelpersUser');

const ClientsController = require('../controllers/clients');

router
  .route('/signup')
  .post(
    [
      validateBodyAddress(schemasAddress.addressSchemas),
      validateBodyClient(schemasClient.clientSchemas),
    ],
    ClientsController.signUp
  );

router
  .route('/regKey')
  .post(
    validateBodyUser(authSchemas.userSchema),
    ClientsController.regKey
  );

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
