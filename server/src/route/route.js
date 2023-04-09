const express = require('express')
const routerProduct = require("./routeProduct")
const routeUser = require('./routeUser')
const routeGallery = require("./routeGallery")
const routeOrder = require("./routeOrder")
const routeOrderDetail = require("./routeOrderDetail")
// const brandRouter = require('./brands')
// const productDetailRouter = require("../app/controller/products/productdetail")
const innitRoute = (app) => {
    app.get("/", (req, res) => {
        res.json({ message: "success" })
    })
    app.use("/", routeUser)
    app.use('/product', routerProduct)
    app.use('/gallery', routeGallery)
    app.use('/order', routeOrder)
    app.use('/orderdetail', routeOrderDetail)
    // app.use('/brand', brandRouter)

}
module.exports = innitRoute;