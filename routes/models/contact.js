const mongoose = require('mongoose');

const ContactSchema = mogoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const Contact = module.exports = mogoose.model('Contact', ContactSchema);