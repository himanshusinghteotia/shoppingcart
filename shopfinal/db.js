const Sequelize = require('sequelize')

const db = new Sequelize('shopdb', 'shopper', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

//structure of our products table NOTE:: NOT USED YET
const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

//structure of our products table
const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

//structure of our carts table
const Cart = db.define("carts", {
    Pid: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    price: {
        type: Sequelize.INTEGER
    }
});

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User, Product, Cart
}