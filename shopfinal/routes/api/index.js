const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/products', require('./products'))
route.use('/carts', require('./cart'))

exports = module.exports = {
    route
}
