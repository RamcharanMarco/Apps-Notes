const express = require('express')
const router = express.Router()
const {createUser, loginUser } = require('../controllers/authController')

router.post('/login', loginUser)

router.post('/signup', createUser)

module.exports = router