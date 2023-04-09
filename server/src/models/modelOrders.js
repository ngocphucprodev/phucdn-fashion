const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//  

const OrdersSchema = new Schema({

    name: {
        type: String, maxLength: 255
    },
    image: {
        type: String, maxLength: 255
    },
    telephone: {
        type: String,
        maxLength: 50
    },
    address: {
        type: String,
        maxLength: 255
    },
    email: {
        type: String,
        maxLength: 255
    },
    totalpayment: {
        type: String
    }
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Users",
    // }
}, {
    timestamps: true
});
module.exports = mongoose.model('Order', OrdersSchema);


