const db = require("../models");


const index = (req, res) => {
    db.Poll.find({}, (err, foundPolls) => {
        if (err) console.log('Error in Polls#index:', err)
        if(!foundPolls) return res.json({
            message: 'No Polls found in database.'
        })
        console.log(foundPolls)
        res.status(200).json({ Polls: foundPolls });
    })
}
const show = (req, res) => {
    db.Poll.findById(req.params.id, (err, foundPoll) => {
        if (err) console.log('Error in Polls#show:', err);
        res.send("Incomplete Polls#show controller function");
    });
};
const create = (req, res) => {
    db.Poll.create(req.body, (err, savedPoll) => {
        if (err) console.log('Error in polls#create:', err)

        db.User.findById(req.body.userId, (err, foundUser) => {
            console.log(savedPoll)
            console.log(foundUser)
            foundUser.polls.push(savedPoll._id)
            foundUser.save()
        })
        //query the db for the user who created the poll (req.body.userId)
        //with the user from the db add the savedPoll id to user.polls
        //user.save({}) 
        res.status(201).json({ poll: savedPoll })
    })
}
const update = (req, res) => {
    db.Poll.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPoll) => {
        if (err) console.log('Error in Polls#update:', err);
        res.send("Incomplete polls#update controller function");
    });
};
const destroy = (req, res) => {
    db.Poll.findByIdAndDelete(req.params.id, (err, deletedPoll) => {
        if (err) console.log('Error in Polls#destroy:', err);
        res.send("Incomplete polls#destroy controller function");
    });
};
module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};