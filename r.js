var products = document.getElementsByClassName('products');
for (var i = 0; i < products.length; i++) {
    products[i].addEventListener('click', changeClass, false);
}

function changeClass() {
    $(this).toggleClass('products1');
    $('products').not(this).removeClass('products1');
}