let mongooose = require('mongoose');

let Scheme = mongooose.Schema;

let itemsSchema = new Scheme( {
 item : String,
 user_id: {type: Scheme.Types.ObjectID, ref: "users"},
});

module.exports = mongooose.model('items', itemsSchema);