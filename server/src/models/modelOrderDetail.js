const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const order = require('./modelOrders')

// const product = require('./modelProducts')

const OrderDetail = new Schema({
    number: {
        type: String,
        maxLength: 50
    },
    price: {
        type: String,
        maxLength: 255
    },
    product: {
        type: String,
        ref: "Product",
    },
    order: {
        type: String,
        ref: "Order",
    },
},
    {
        collection: "orderDetail"
    },
    {
        timestamps: true
    });
module.exports = mongoose.model('OrderDetail', OrderDetail);
