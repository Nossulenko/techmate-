const User = require('../models/user');

exports.read = (req, res) => {

    req.profile.hashed_passowrd = undefined;
    return res.json(req.profile);
};