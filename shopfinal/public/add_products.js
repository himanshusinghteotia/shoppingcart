/* 
add products in database using addproduct() of shop.js  
*/
$(function () {
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')
    productName.focus();
    $('#btnProductAdd').click(function () {
        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function (addedProduct) {
                window.alert(addedProduct.name + " Added to your Shop.")
            }
        )
        $('#form1 input').val('');//empty the textbox after submition
        productName.focus();
    })
})