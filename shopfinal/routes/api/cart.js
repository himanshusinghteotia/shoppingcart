const Cart = require('../../db').Cart
const route = require('express').Router();

//fetch data from database and sending it to shop.js
route.get('/', (req, res) => {
	// Get all products
	Cart.findAll()
		.then((carts) => {
			res.status(200).send(carts)
		})
		.catch((err) => {
			res.status(500).send({
				error: "Could not retrieve products"
			})
		})
})

//creting new cart products
route.post('/', (req, res) => {
	Cart.findOne({
		where: {
			Pid: req.body.Pid
		}
	}).then(cartProduct => {
		if (!cartProduct) {
			Cart.create({
				Pid: req.body.Pid,
				name: req.body.name,
				price: parseFloat(req.body.price)
			}).then((cart) => {
				res.status(200).send(cart)
			}).catch((error) => {
				res.status(500).send({
					error: console.log(error)
				})
			});
		} else {
			cartProduct.increment("quantity").then(product => {
				res.send(product);
			});
		}
	})
})
exports = module.exports = route