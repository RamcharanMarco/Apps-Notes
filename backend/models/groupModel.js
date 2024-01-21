const mongoose = require('mongoose')

const Schema = mongoose.Schema

const groupSchema = new Schema({
    group:{
        type: String,
        required: true
    }
},
{timestamps: true})

module.exports = mongoose.model('group', groupSchema)