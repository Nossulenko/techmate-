const express = require('express');
const router = express.Router();
const { signup, signin  } = require('../controllers/auth');

// Validators

const {runValidation} = require('../validators');
const {userSignupValidator, userSigninValidator} = require('../validators/auth');


//if the validation is passed only then will the signup function be invoked

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);

module.exports = router;