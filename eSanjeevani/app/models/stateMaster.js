var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('../../config/dbconfig');
var validate = require('mongoose-validator');

var extend = require('mongoose-validator').extend
var validationclass = require('../../classes/validationClass');


var stateMasterSchema = new Schema({
    name: {
        type: String,
        reuired: [true, "State Name is required."]
    },
    code: {
        type: String,

    }
}, { emitIndexErrors: true });

var StateMaster = db.model('StateMaster', stateMasterSchema, 'StateMaster');
module.exports = StateMaster;