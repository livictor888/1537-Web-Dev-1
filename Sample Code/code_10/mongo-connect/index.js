let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase');

let User = require('./usersModel');

let db = mongoose.connection;

db.once('open', function() {
    console.log('Connection was succesfull');
})

let user = new User({username:'Victor', password:'password', imageNumber: 25});

user.save(function(err) {
    if(err) { console.log(err)}
    else { console.log('User was saved')};
})


User.find({username:'Sandy', password:'123'}, function(err,records) {
    if(err) { console.log(err)}
    else {
        console.log(records);
    }
})

User.find( function(err,records) {
    if(err) { console.log(err)}
    else {
        console.log(records);
    }
})
