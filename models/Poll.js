const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema ({
    body: String,
    date: Date
})

const pollSchema = new Schema ({
	question:  {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: 
        }
  },
	response: {
        verified: Boolean,
    },
    comments: [CommentSchema],
	author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
}, {timestamps: true});

const Poll = mongoose.model('Poll', pollSchema)

module.exports = Poll
