var TextShopping = document.getElementsByClassName('TextShopping');
for (var i = 0; i < TextShopping.length; i++) {
    TextShopping[i].addEventListener('click', changeClass, false);
}

function changeClass() {
    $(this).toggleClass('TextShopping1');
    $('TextShopping').not(this).removeClass('TextShopping1');
}