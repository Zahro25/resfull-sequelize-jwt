const welcome = require ('./welcome')
const foodsRouter = require('./foodRuotes');
const mainRouter = require('express').Router()
const authRoutes = require('./authRoutes')

mainRouter.use('/',welcome)
mainRouter.use('/foods', foodsRouter)
mainRouter.use('/auth',authRoutes)
module.exports=mainRouter;