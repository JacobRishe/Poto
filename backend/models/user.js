const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PollSchema = require('./poll')


const userSchema = new Schema ({
	username:  {
        type: String,
        required: true,
        unique: true
    },
	password: {
        type: String,
        required: true,
        unique: true
    },
	email: {
        type: String,
        required: true,
        unique: true
    },
    polls: [{ ref: 'Poll' }]
})


const User = mongoose.model('User', userSchema)

module.exports = User