const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    homeAddress:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema)