const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/auth');

// Validators

const {runValidation} = require('../validators');
const {userSignupValidator} = require('../validators/auth');


//if the validation is passed only then will the signup function be invoked

router.post('/signup', userSignupValidator, runValidation, signup);

module.exports = router;