const express = require('express');
const router = require('express-promise-router')();

const {
  validateBodyUser,
  authSchemas,
} = require('../helpers/yup_validation/routeHelpersUser');

const UsersController = require('../controllers/users');

router
  .route('/signup')
  .post(validateBodyUser(authSchemas.userSchema), UsersController.signUp);

router.route('/signin').post(UsersController.signIn);

router.route('/secret').get(UsersController.secret);

module.exports = router;
