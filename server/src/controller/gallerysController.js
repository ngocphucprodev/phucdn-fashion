const Gallerys = require("../models/modelGallery")
//const { MongooseToObject } = require('../../../util/mongoose')
const ProductsController = {
    show(req, res) {
        Gallerys.find({})
            .then(gallerys => {
                // products = products.map(product => product.toObject())
                // res.render('products', { products })
                res.json(gallerys)
            })
    },
    index(req, res, next) {
        Gallerys.findById(req.params.id)
            .then(gallerys => {
                // res.render('detail', { products: MongooseToObject(products) })
                res.json(gallerys)
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },


    // create(req, res) {
    //     res.render('create')
    // },

    store(req, res, next) {
        const gallery = new Gallerys(req.body)
        gallery.save(req.body)
            .then(() => {
                if (req.body.gallery) {
                    const gallery = Gallerys.findById(req.body.gallery)
                    gallery.updateOne({ gallery: gallerys.product(req.body)._id })
                } else {
                    console.log("no gallery")
                }
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },

    // edit(req, res) {
    //     // console.log(req.params.id)
    //     Products.findById(req.params.id).updateOne({ $set: req.body })
    //         // Brands.findByIdAndUpdate(req.params.id, { $set: req.body })
    //         .then(() => {
    //             // Brands.updateOne({ $set: req.body })
    //             res.json({ status: "success" })
    //         }
    //             // res.render('update', { products: MongooseToObject(products) })
    //         )
    //         .catch(err => res.status(400).json('Error: ' + err));

    // },

    // update(req, res, next) {
    //     Products.updateOne({ $set: req.body })
    //         .then(() => res.redirect('/show'))
    //         .catch(err => res.status(400).json('Error: ' + err));

    // },

    delete(req, res, next) {
        Gallerys.findOneAndDelete(req.params.id)
            .then(() => res.redirect('/show'))
            .catch(err => res.status(400).json('Error: ' + err));
    },

}
module.exports = ProductsController