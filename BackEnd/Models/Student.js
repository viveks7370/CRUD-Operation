const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    age:Number
});

const studentModel = mongoose.model('Student',studentSchema);

module.exports = studentModel;