let mongooose = require('mongoose');

let Scheme = mongooose.Schema;

let userSchema = new Scheme( {
 username : String,
 password: String,
 imageNumber: Number,
});

module.exports = mongooose.model('users', userSchema);
