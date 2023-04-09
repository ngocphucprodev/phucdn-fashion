const OrderDetail = require("../models/modelOrderDetail")
const order = require("../models/modelOrders")
const product = require("../models/modelProducts")
//const { MongooseToObject } = require('../../../util/mongoose')
const OrdersController = {
    show(req, res) {
        OrderDetail.find({})
            // .populate("order").populate("product").select("-product.size -product.total -product.description")

            .then(orders => {
                // products = products.map(product => product.toObject())
                // res.render('products', { products })
                res.json(orders)
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },
    index(req, res, next) {
        OrderDetail.find({ order: req.params.id })
            .then(orders => {
                // res.render('detail', { products: MongooseToObject(products) })
                res.json(orders)
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },


    // create(req, res) {
    //     res.render('create')
    // },

    store(req, res, next) {
        console.log(req.body)
        const orderDetail = new OrderDetail(req.body)
        OrderDetail.insertMany(req.body)
            .then((data) => {
                console.log("success")
                // if (req.body.order) {
                //     const orderDetail = OrderDetail.findById(req.body.order)
                //     orderDetail.updateOne({ order: orderDetail.order(req.body)._id })
                // } else {
                //     res.status(400).json('Error: ' + err)
                // }
            })
            .catch(err => res.status(400).json('Error: ' + err));
        // res.json(req.body)
    },

    edit(req, res) {
        // console.log(req.params.id)
        Orders.findById(req.params.id).updateOne({ $set: req.body })
            // Brands.findByIdAndUpdate(req.params.id, { $set: req.body })
            .then(() => {
                // Brands.updateOne({ $set: req.body })
                res.json({ status: "success" })
            }
                // res.render('update', { products: MongooseToObject(products) })
            )
            .catch(err => res.status(400).json('Error: ' + err));

    },

    // update(req, res, next) {
    //     Products.updateOne({ $set: req.body })
    //         .then(() => res.redirect('/show'))
    //         .catch(err => res.status(400).json('Error: ' + err));

    // },

    delete(req, res, next) {
        Orders.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/show'))
            .catch(err => res.status(400).json('Error: ' + err));
    },

}
module.exports = OrdersController