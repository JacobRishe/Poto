const mongoose = require('mongoose')


const userSchema = new Schema ({
	username:  {
        type: String,
        required: true,
        unique: true
    },
    polls: [{
        type: mongoose.Schema.Types.ObjestId,
        ref: 'Article'
    }],
}, {timestamps: true});


const User = mongoose.model('User', userSchema)

module.exports = Author;