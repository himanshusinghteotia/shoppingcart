/*
To display cart products on cart.html by calling fechCart()
To add products into the cart by calling addCart in shop.js
*/
$(function () {
	let cartList = $('#cart-list')
	fetchCart(function (cprods) {
		cartList.empty()
		for (cprod of cprods) {
			cartList.append(appendCart(cprod))
		}
	})
	$('#product-list').on('click', 'button', function () {
		var c = this.id
		var a = document.querySelectorAll("div[id=div1]")
		var productName = a[c - 1].childNodes[1].innerText
		var productPrice = a[c - 1].childNodes[5].childNodes[1].innerText
		addCart(
			parseInt(c),
			productName,
			productPrice,
			function (addedProduct) {
			}
		)
	})
})



