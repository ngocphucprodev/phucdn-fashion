const express = require('express')
const router = express.Router()
const gallerysController = require('../controller/gallerysController')

// router.post('/login', UserController.login)
router.get('/show', gallerysController.show)
router.get('/detail/:id', gallerysController.index)
router.post('/store', gallerysController.store)
// router.put('/edit/:id', productsController.edit)
//router.delete('/delete/:id', productsController.delete)
module.exports = router