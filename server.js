const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

app.use(express.json())
app.use(cors());
app.use('/api/users', routes.users)
app.use('/api/polls', routes.polls)





app.listen(4000, function() {
    console.log("Server is running on Port: " + 4000);
});