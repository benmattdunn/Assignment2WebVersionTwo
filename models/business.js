


var mongoose = require('mongoose');


var businessSchema = new mongoose.Schema({

    businessname: {
        type: String,
        Required: 'name of business is required'
    },
    businesstags: {
        type: String,
        Required: 'a short tag description is required'
    },
    businessdescription: {
        type: String,
        Required: 'a long form description of the business is required'
    },
    businessaddress: {
        type: String,
        Required: 'address is required'
    }, //the next three fields are 'hidden from submission'
    addedbyusername: {
        type: String

    },
    addedbyuserid: {
        type: String
    },
    datecreated: {
        type: String //not required, debugger.
    }

});


//apparently needed?


// make this public
module.exports = mongoose.model('Business', businessSchema);

