const db = require("../models");



const index = (req, res) => {
    db.User.find({}, (err, foundusers) => {
        if (err) console.log('Error in users#index:', err)
        if(!foundUsers) return res.json({ message: 'No Users found in database.' })
        console.log(foundUsers)
        res.json({ Users: foundUsers });
    })
}


const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) console.log('Error in Users#show:', err);
        
        if (!foundGame) return res.json({ message: "Game with that ID was not found." })

        res.json({ game: foundGame })
    });
};


const create = (req, res) => {
    db.User.create(req.body, (err, savedUser) => {
        if (err) console.log('Error in users#create:', err)
        res.json({ user: savedUser })
    })
}


const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) console.log('Error in Users#update:', err);
        
        res.json({ user: updatedUser });
    });
};


const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) console.log('Error in Users#destroy:', err);
        res.json({ message: "User removed." });
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};