/*
add products from the database using create ProductCard() written in shop.js
*/
$(function () {
    let productList = $('#product-list')

    fetchProducts(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(createProductCard(product))
        }
    })
})