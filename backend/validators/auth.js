const {check} = require('express-validator');
exports.userSignupValidator = [

    check('name')
        .not()
        .isEmpty()
        .withMessage('Naam is verplicht!'),
    check('email')
        .not()
        .isEmpty()
        .withMessage('Vul een geldig email adres in!'),
    check('password')
        .isLength({min: 6})
        .withMessage('Uw password moet minstens 6 karakters lang zijn')
];

exports.userSigninValidator = [

    check('email')
        .not()
        .isEmpty()
        .withMessage('Vul een geldig email adres in!'),
    check('password')
        .isLength({min: 6})
        .withMessage('Uw password moet minstens 6 karakters lang zijn')
];