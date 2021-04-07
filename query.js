const mongoose = require('mongoose')
require('./db')
const Poll = require('./Poll')

Poll.create({
    question: 'Should I eat pizza tonight?',
    response: True,
    author: "",
}, (err, poll) => {
    if (err) console.log()
})