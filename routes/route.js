const express = require('express');
const router = express.Router();

const Contact = requie('./models/contacts');

router.get('/contacts', (req, res, next) =>{
    // res.send('Retrieving the contact list');
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

router.post('/contacts', (req, res, next) =>{
    res.send('Retrieving the contact list');
});

router.delete('/contacts/:id', (req, res, next) =>{
    res.send('Retrieving the contact list');
});




module.exports = router;