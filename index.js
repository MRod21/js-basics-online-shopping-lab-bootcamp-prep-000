var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var newObject = {itemName: item}
  newObject.itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.unshift(newObject)
 console.log(newObject)
 return `${item} has been added to your cart.`
}	

function viewCart() {
  // write your code here
}

function total() {
  var cartItemPrice = [];
  var totalPrice = 0
  
  for(var i = 0; i < cart.length; i++) {
    var itemPrice = cart[i][Object.keys(cart[i])]
      cartItemPrice.push(itemPrice)
    }
  
  for (var a = 0; a < cartItemPrice.length; a++) {
    totalPrice = cartItemPrice[a]+=totalPrice
  }
  return totalPrice
}

total()


function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
