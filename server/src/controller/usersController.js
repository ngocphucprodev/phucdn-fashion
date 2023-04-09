const Users = require("../models/modelUsers")
const jwt = require("jsonwebtoken")
// const { MongooseToObject } = require('../../../util/mongoose')
const UsersController = {
    login(req, res) {
        const { email, password } = req.body

        Users.findOne({ email, password })
            .then((user) => res.json({ success: true, accessToken: jwt.sign({ usersid: user._id }, "secret"), user }))
            // .then((user) => res.json(user))
            .catch(err => res.json({ success: false, message: "login unsuccessful" }));
    },
    show(req, res) {
        Users.find({})
            .then(users => {
                // users = users.map(user => user.toObject())
                // res.render('users', { users })
                res.json(users)
            })
    },
    // show(req, res) {
    //     res.json({ message: "Connect users" })
    // }
    store(req, res) {
        const users = new Users(req.body)
        // let items = req.body.map(item => {
        //     return {
        //         username: item.username,
        //         email: item.email,
        //         password: item.password,
        //         telephone: item.telephone,
        //         gender: item.gender,
        //         image: item.image,
        //         role: item.role
        //     };
        // });
        // const options = { ordered: true };
        // console.log(items)
        // // console.log(users)
        // Users.insertMany(req.body)
        //     .then(() => {
        //         console.log("Orders Added!");
        //         res.status(200).json("Order Added!");
        //     })
        //     .catch(err => res.status(400).json("Error: " + err));
        users.save(req.body)
            .then(() =>
                //     console.log("data", items)
                //     // res.json({ status: "create user success" })
                res.json({ status: "success", accessToken: jwt.sign({ usersid: users._id }, "secret") })
            )
            .catch(err => res.status(400).json('Error: ' + err));
        // res.json(req.body)
    },
    edit(req, res) {
        // console.log(req.params.id)
        Users.findById(req.params.id).updateOne({ $set: req.body })
            // Brands.findByIdAndUpdate(req.params.id, { $set: req.body })
            .then(() => {
                // Brands.updateOne({ $set: req.body })
                res.json({ status: "success" })
            }
                // res.render('update', { products: MongooseToObject(products) })
            )
            .catch(err => res.status(400).json('Error: ' + err));

    },
    delete(req, res, next) {
        Users.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/all'))
            .catch(err => res.status(400).json('Error: ' + err));
    },
}

module.exports = UsersController