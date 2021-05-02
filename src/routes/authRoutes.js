const authRoutes = require('express').Router()
const authControllers = require('../controllers/authControllers')

authRoutes.post('/sign-up',authControllers.signup)
authRoutes.post('/sign-in',authControllers.signin)

module.exports=authRoutes