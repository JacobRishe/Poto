require("dotenv").config()
const db = require('./models');
const data = require('./pollData.json');

db.Poll.deleteMany({}, (err, deletedPolls) => {
    db.Game.create(data.games, (err, seededPolls) => {
        if (err) console.log(err);
        
        console.log(data.polls.length, 'polls created successfully');
        
        process.exit();
    });
});