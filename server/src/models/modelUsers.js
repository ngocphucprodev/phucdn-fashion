const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Users = new Schema({
    username: { type: String, maxLength: 50 },
    email: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 255 },
    telephone: { type: String, maxLength: 255 },
    image: {
        type: String,
        maxLength: 255
    },
    gender: {
        type: String,
    },
    role: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Users', Users)
