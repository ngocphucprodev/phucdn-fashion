const express = require('express')
const router = express.Router()
const ordersController = require('../controller/ordersController')

// router.post('/login', UserController.login)
router.get('/show', ordersController.show)
router.get('/detail/:id', ordersController.index)
router.post('/store', ordersController.store)
router.put('/edit/:id', ordersController.edit)
router.delete('/delete/:id', ordersController.delete)
module.exports = router