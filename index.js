var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var itemObj = {[item]: itemPrice};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  var z = 100
  for (var i = 0; i < cart.length; i++) {
    z += cart[i][Object.keys(cart[i])]
  }
  return z
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
