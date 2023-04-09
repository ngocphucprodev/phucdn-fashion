const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Gallerys = new Schema({
    image1: {
        type: String,
    },
    image2: {
        type: String,
    },
    image3: {
        type: String,
    }
    // products: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Products"
    // }]
})

module.exports = mongoose.model('Gallerys', Gallerys);