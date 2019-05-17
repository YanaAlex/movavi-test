cart = [];
cartSumm = 0;
id = 0;

var initCart = JSON.parse(localStorage.getItem('cart')) || [];
initCart.forEach(good => addToCart(good.name, good.cost));

function makeProductNode(id, name, cost) {
    return '<div id="cart-item-' + id + '" class="shopping-basket__software-package">'
        + '<img class="shopping-basket__img" src="img/крестик.png" alt="крестик" onclick="removeFromCart(' + id + ')">'
        + '<p class="shopping-basket__description">' + name + '</p>'
        + '<p class="shopping-basket__price">' + cost + ' руб.' + '</p>'
        + '</div>';
}

function addToCart(name, cost) {
    cart.push({ id, name, cost });
    var goods = document.getElementById('goods');
    goods.innerHTML += makeProductNode(id, name, cost);
    calcCartSumm();
    saveCart();
    id++;
}

function removeFromCart(id) {
    cart = cart.filter(function (item) { return item.id !== id });
    document.getElementById('cart-item-' + id).remove();
    calcCartSumm();
    saveCart();
}

function calcCartSumm() {
    cartSumm = cart.reduce(function (acc, item) {
        return acc + item.cost;
    }, 0);
    document.getElementById('total-cart-summa').textContent = cartSumm + ' руб.';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function mainClick() {
    var messageAdd = ('Вы добавили в корзину: ' + cart.reduce(function (acc, item) { return acc += item.name + ' | ' }, '') + " На сумму: " + cartSumm + ' руб.');
    alert(messageAdd);
}
