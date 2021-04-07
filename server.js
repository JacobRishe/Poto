const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routesUrls = require('./routes')


app.use(express.json())
app.use(cors());
app.use('/app', routesUrls.polls)






app.listen(4000, function() {
    console.log("Server is running on Port: " + 4000);
});