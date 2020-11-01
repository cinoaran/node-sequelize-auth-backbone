const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportJS = require('../passport');

const {
  validateBodyUser,
  authSchemas,
} = require('../helpers/yup_validation/routeHelpersUser');

const UsersController = require('../controllers/users');

const passportSignIn = passport.authenticate('local', { session: false })
const passportJWT = passport.authenticate('jwt', { session: false })

router.route('/signin').post(validateBodyUser(authSchemas.userSchema), passportSignIn, UsersController.signIn);

router
  .route('/regkey')
  .post(
    validateBodyUser(authSchemas.userSchema),
    UsersController.regKey
  );

module.exports = router;
