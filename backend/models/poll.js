const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = require('./user')

const pollSchema = new Schema ({
	question:  {
        type: String,
        required: true,
        unique: true
  },
	response: {
        hidden: Boolean,
    },
	author: [{ ref: User }]
    
})

const Poll = mongoose.model('Poll', pollSchema)

module.exports = Poll
