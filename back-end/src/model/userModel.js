const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        trim : true
    }
})

module.exports = mongoose.model('user', userSchema)