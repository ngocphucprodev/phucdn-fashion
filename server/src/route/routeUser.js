const express = require('express')
const router = express.Router()
const UserController = require('../controller/usersController')

router.post('/login', UserController.login)
router.get('/all', UserController.show)
router.get('/', (res) => {
    res.json({ status: "success" })
})
router.post('/store', UserController.store)
router.put('/edit/:id', UserController.edit)
router.delete('/delete/:id', UserController.delete)
module.exports = router