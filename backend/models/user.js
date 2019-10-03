const mongoose = require('mongoose');
const crypto = require('crypto');


const userSchema = new mongoose.Schema({

    username: {

        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true,
        index: true,
        lowerCase: true
    },

    name: {

        type: String,
        trim: true,
        required: true,
        maxLength: 32,
    },

    email: {

        type: String,
        trim: true,
        required: true,
        unique: true,
        maxLength: 32,
        lowercase: true
    },

    profile: {

        type: String,
        required: true
    },

    hashed_password: {

        type: String,
        required: true

    },

    salt: Number,

    about: {

        type: String
    },
    role: {

        type: Number,
        trim: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },

    resetPasswordLink: {
        data: String,
        default: ''
    }

})