const db = require("../models");
const mongoose = require('mongoose')


const index = (req, res) => {
    db.Poll.find({}).then((foundpolls) => {
        res.json({ polls: foundpolls })
    
    }).catch((err) => {
        console.log('Error in poll.index', err);
        res.json({ Error: 'Unable to get your data' })
    });
};


const show = (req, res)=>{
    db.Poll.findById(req.params.id).populate('polls').then((foundPoll) => { 
        res.json({ poll: foundPoll })

    }).catch((err)=>{
        console.log('Error in poll.show', err);
        res.json({ Error: 'Unable to retrieve your data -show' })
    });
};


const create = (req, res) => { 
    db.Poll.create(req.body).then((savedPoll) => {

        db.User.findById(req.body.user).then((foundUser) => {

            foundUser.polls.push(savedPoll._id);
            foundUser.save().then(
                res.json({ savedPoll })

            ).catch((error)=>{
                res.json({ Error: error, personalError: "Problem saving poll to user" })
            })
            
        }).catch((error) => {res.json({ Error:error, savedPoll: savedPoll })})
        res.status(201).json({ poll: savedPoll });

    }).catch((err) => {
        console.log('Error in poll.create', err);
        res.json({ Error: 'Unable to submit your data' })
    });
};


const update = (req, res) => {
    db.Poll.findByIdAndUpdate(req.params.id,
        {$set: req.body}, //don't want to reset whole body just field in body
        { new: true }).then((updatedPoll) => {
            res.json({ poll: updatedPoll })

        }).catch((err)=>{
            console.log('Error in poll.update', err);
            res.json({Error: 'Unable to Update data'})
        });
};


const destroy = (req, res) => {

    const pollId = req.params.id;

    db.Poll.findByIdAndDelete(req.params.id).then((deletedPoll) => {
        db.Poll.deleteMany({_id}).then((response) => {
            db.User.findOne({ 'poll': pollId }).then((foundUser) => {
                foundUser.polls.remove(pollId)
                foundUser.save().then((updatedUser) => {
                    res.json({ user: updatedUser });
                })
            });
        }).catch((error) => {
            res.json({ Error: error })
        });
    }).catch((err) => {
        console.log('Error in poll.destroy', err);
        res.json({ Error: 'Unable to Delete data' })
    });
};

const findById = (req, res) => {

    const { userId } = req.body;

    db.Poll.find({ 'user':userId }).then((foundpolls) => {
        res.send(foundpolls);
    }).catch((error) => {
        res.json({error});
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    findById,
}