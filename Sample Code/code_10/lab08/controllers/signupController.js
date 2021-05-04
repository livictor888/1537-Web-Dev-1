let fs = require('fs');
let path = require('path');
let User = require('../models/usersModel');

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase');

//let User = require('./usersModel');

let db = mongoose.connection;

exports.getSignupPage = function (req, res) {
    console.log("hello");
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // the complete path to signup.html
    let signupHtmlPath = path.join(__dirname, '..', 'views', 'signup.html');
    console.log(signupHtmlPath);

    fs.readFile(signupHtmlPath, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            res.write(data.toString())
        }
        res.end();
    });
}

exports.postSignupPage = function (req, res) {
    let data = [];

    req.on('data', function (chunk) {
        console.log(chunk);
        data.push(chunk);
        console.log('hello');

    })

    req.on('end', function () {
        let _info = Buffer.concat(data).toString();

        let pieces = _info.split('&');

        let newUsername = pieces[0].split('=')[1];

        let newPassword = pieces[1].split('=')[1];

        let newAvatar = pieces[2].split('=')[1];
        User.find({ username: newUsername, password: newPassword }, function (err, records) {
            if (err) { console.log(err); }
            else {
                if (records.length == 0) { // there doesn't exist this user
                    //console.log(records)
                    //console.log(records[0]._id); //print out the _id only
                    console.log("hello22");
                    let User = require('../models/usersModel');

                    let db = mongoose.connection;

                    db.once('open', function () {
                        console.log('Connection was succesfull');
                    })

                    let user = new User({ username: newUsername, password: newPassword, imageNumber: newAvatar });

                    user.save(function (err) {
                        if (err) { console.log(err) }
                        else { console.log('User was saved') };
                    })
                    res.writeHead(301, {'Location' : '/'});
                    res.end();

                } else {
                    let div = `<div> <span style="color:red"> User with specified username and password exists </span> </div>`
                    let signupHtmlPath = path.join(__dirname, '..', 'views', 'signup.html');
                    fs.readFile(signupHtmlPath, function (err, data) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.write(data.toString())
                            res.write(div);
                        }
                        res.end();
                    });
                }
            }
        });
    });

}
