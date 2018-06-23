/*
used to fetch product data from database
*/
function fetchProducts(done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

/*
used by add_products.js to save entered product details in database
*/
function addProduct(name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        done(data)
    })
}

/*
used by index.js to create shopping available product list 
*/
function createProductCard(product) {
    return $(`
    <div class="col-5 card mx-auto mb-4 p-4 text-center border-primary" id="div1">
        <h4 class="product-name text-uppercase">${product.name}</h4>
        <div class="product-manufacturer v">${product.manufacturer}</div>
        <div class="row">
            <div class="col m-3 p-3">
                <b>${product.price}</b>
            </div>
            <button id="${product.id}"class="col-2 btn btn-primary m-auto" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fas fa-plus"></i></button> 
        </div>
    </div>`
    )
}

/*
Used to display cart products on cart.html page
*/
let tot = 0;
function appendCart(cart) {
    x = parseInt(cart.quantity) * parseFloat(cart.price)
    tot = tot + x;
    $('.total').text(tot);
    return $(`<tr>
                 <td class="item-name">${cart.name}</td>
				 <td class="item-number text-center">${cart.quantity}*${cart.price}</td>
                 <td class="item-price">₹${x} </td>
                 </tr>`
    )
}

/*
used to get selected products from database
*/
function fetchCart(done) {
    $.get('/api/carts', function (data) {
        done(data)
    })
}

/*
used to add products in the cart
*/
function addCart(c, name, price, done) {
    $.post('/api/carts', {
        Pid: c,
        name: name,
        price: price,
    }, function (data) {
        done(data)
    })
}