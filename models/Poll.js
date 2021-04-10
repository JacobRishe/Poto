const mongoose = require('mongoose')

const ResponseSchema = new mongoose.Schema ({
    vote: { 
        type: Boolean,
        default: false,
    },
})

const pollSchema = new mongoose.Schema ({
	question:  {
        type: String,
        required: true,
        unique: true
  },
    response: [ResponseSchema],
	author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true});

const Poll = mongoose.model('Poll', pollSchema)

module.exports = Poll
