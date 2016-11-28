


var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');

var accountSchema = new mongoose.Schema({
    // empty schema is ok as passport defines username / password automatically
    //^- would of been nice to know that ahead of time XD, thank god I check friday's repository.

    userName: {
        type: String,
        Required: 'user name is required'
    },
    password: {
        type: String,
        Required: 'password is required'
    },


    oauthID: {type: String },
    displayName: {type: String} //I want a common name for the users, such as 'ted blinkon' so the business owner can be referenced easier
    //for non programmers. Display names do not have to be unique either, which is better IMO.
    //created: Date
});



accountSchema.plugin(plm);

// make this public
module.exports = mongoose.model('Account', accountSchema);

