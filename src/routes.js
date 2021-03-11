const express = require('express')
const router = express.Router()

const UserController = require('./controllers/UserController')
const MessageController = require('./controllers/MessageController')

router.post('/user/signin', UserController.signIn)
router.post('/user/signup', UserController.signUp)
router.post('/user/friends', UserController.getFriends)

router.post('/message', MessageController.sendMessage)

module.exports = router