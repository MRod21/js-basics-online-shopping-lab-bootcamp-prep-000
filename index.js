var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
  var z = 100
  for (var i = 0; i < cart.length; i++) {
    z +=
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
