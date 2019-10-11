const mongoose = require('mongoose');

const catergorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32,
        },

        slug: {

            type: String,
            unique: true,
            max: 32,
            index: true
        }

    },

    { timestamp: true }

);

module.exports = mongoose.model('Category', catergorySchema );

