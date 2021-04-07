const db = require("../models");
const mongoose = require('mongoose')



const index = (req, res) => {
    db.User.find({}, (err, foundusers) => {
        if (err) console.log('Error in users#index:', err)
        if(!foundUsers) return res.json({
            message: 'No Users found in database.'
        })
        console.log(foundUsers)
        res.status(200).json({ Users: foundUsers });
    })
}
const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) console.log('Error in Users#show:', err);
        res.send("Incomplete Users#show controller function");
    });
};
const create = (req, res) => {
    db.User.create(req.body, (err, savedUser) => {
        if (err) console.log('Error in users#create:', err)
        // Validations and error handling here
        res.status(201).json({ user: savedUser })
    })
}
const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) console.log('Error in Users#update:', err);
        res.send("Incomplete users#update controller function");
    });
};
const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) console.log('Error in Users#destroy:', err);
        res.send("Incomplete users#destroy controller function");
    });
};
module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};