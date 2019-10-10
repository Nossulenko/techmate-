const User = require('../models/user');
const shortId  = require('shortid');
const jwt = require('jsonwebtoken');
const expressJwt = require( 'express-jwt');



exports.signup = (req, res) => {

    User.findOne({email: req.body.email}).exec((err, user) => {
        if (user){
            return res.status(400).json({
                error: 'Email is al in gebruik'
            });
        }

        const {name, email, password} = req.body;
        let username = shortId.generate();
        let profile = `${process.env.CLIENT_URL}/profile/${username}`;

        let newUser = new User ({name, email, password, profile, username});

        newUser.save((err, success) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            //res.json({
            //    user: success
            //})
            res.json({
                message: 'U bent geregistreerd! U kan nu inloggen'
            })
        })
    })
};

exports.signin = (req, res) => {
    const {email, password } =req.body;
    //check if user exist
   User.findOne({email}).exec((err,user) => {

       if (err || !user){
           return res.status(400).json({
               error: 'Er bestaat geen gebruikers met dit email, probeer eerste registreren'
           });
       }
       //authenticate
       if (!user.authenticate(password)){
           return res.status(400).json({
               error: 'Email en paswoord komen niet overeen'
           });
       }

       const token = jwt.sign({_id: user._id}, process.env.JWT_SECTER, {expiresIn: '1d'});

       //generate a token and send to client
       res.cookie('token', token, {expiresIn: '1d'});
       const {_id, username, name, email, role} = user;
       return res.json({
                token,
                user: {_id, username, name, email, role}
       })
   });

};

exports.signout =  (req, res) => {

    res.clearCookie("token");

    res.json({
        message: 'Signout succes'
    });
};

exports.requireSignin  = expressJwt({

    secret: process.env.JWT_SECTER
});

exports.authMiddleware = ( req, res, next) => {
    const authUserId  = req.user._id;
    User.findById({_id: authUserId}).exec((err, user ) => {

        if ( err || !user) {
            return res.status(400).json({

                error: 'User not found'
            })
        }
        req.profile  = user;
        next()
    })
};

exports.adminMiddleware = ( req, res, next) => {
    const authUserId  = req.user._id;
    User.findById({_id: authUserId}).exec((err, user ) => {

        if ( err || !user) {
            return res.status(400).json({

                error: 'User not found'
            });
        }

        if (user.role !== 1 ) {

            return res.status(400).json({

                error: 'Toegang geweigerd, enkel admin heeft toegang'
            });
        }

        req.profile  = user;
        next();
    });
};














