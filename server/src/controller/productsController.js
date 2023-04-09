const Products = require("../models/modelProducts")
//const { MongooseToObject } = require('../../../util/mongoose')
const ProductsController = {
    show(req, res) {
        Products.find({})
            .then(products => {
                // products = products.map(product => product.toObject())
                // res.render('products', { products })
                res.json(products)
            })
    },
    index(req, res, next) {
        Products.findById(req.params.id).populate("gallery")
            .then(products => {
                // res.render('detail', { products: MongooseToObject(products) })
                res.json(products)
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },


    // create(req, res) {
    //     res.render('create')
    // },

    store(req, res, next) {
        const product = new Products(req.body)
        product.save(req.body)
            .then(() =>
            // res.redirect('/show')
            // res.json({ product })
            {
                if (req.body.brand) {
                    const brand = Products.findById(req.body.brand)
                    brand.updateOne({ brand: brands.product(req.body)._id })
                }
            }
            )
            .catch(err => res.status(400).json('Error: ' + err));
        // res.json(req.body)
    },

    edit(req, res) {
        // console.log(req.params.id)
        Products.findById(req.params.id).updateOne({ $set: req.body })
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
        Products.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/show'))
            .catch(err => res.status(400).json('Error: ' + err));
    },

}
module.exports = ProductsController