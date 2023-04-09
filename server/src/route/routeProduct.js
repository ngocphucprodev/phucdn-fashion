const express = require('express')
const router = express.Router()
const productsController = require('../controller/productsController')

// router.post('/login', UserController.login)
router.get('/show', productsController.show)
router.get('/detail/:id', productsController.index)
router.post('/store', productsController.store)
router.put('/edit/:id', productsController.edit)
router.delete('/delete/:id', productsController.delete)
module.exports = router