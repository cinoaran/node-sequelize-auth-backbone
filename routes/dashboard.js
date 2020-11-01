const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportJS = require('../passport');

const DashboardController = require('../controllers/dashboard');
const passportJWT = passport.authenticate('jwt', { session: false })

router.route('/').get(passportJWT, DashboardController.dashboard);

module.exports = router;