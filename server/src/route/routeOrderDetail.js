const express = require('express')
const router = express.Router()
const orderDetailController = require('../controller/orderDetailController')

// router.post('/login', UserController.login)
router.get('/show', orderDetailController.show)
router.get('/:id', orderDetailController.index)
router.post('/store', orderDetailController.store)
// router.put('/edit/:id', orderDetailController.edit)
// router.delete('/delete/:id', orderDetailController.delete)
module.exports = router