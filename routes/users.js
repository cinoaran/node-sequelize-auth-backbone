const express = require('express');
const router = require('express-promise-router')();

const {
  validateBodyUser,
  schemaUser,
} = require('../helpers/yup_validation/routeHelpersUser');

const UsersController = require('../controllers/users');

router
  .route('/signup')
  .post(validateBodyUser(schemaUser.authSchema), UsersController.signUp);

router.route('/signin').post(UsersController.signIn);

router.route('/secret').get(UsersController.secret);

module.exports = router;
