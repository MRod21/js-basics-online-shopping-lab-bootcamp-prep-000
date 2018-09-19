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
    let message = "In your cart, you have"
  if(cart.length === 0){
    message = "Your shopping cart is empty."
  } else {
    for(let i = 0; i < cart.length; i++){
      let toAdd = Object.values(cart[i])
      if(i === cart.length - 1 && cart.length > 1){
        message = message + ` and ${toAdd[0]} at $${toAdd[1]}.`
      } else if(cart.length === 1) {
         message = message + ` ${toAdd[0]} at $${toAdd[1]}.`
      } else {
        message = message + ` ${toAdd[0]} at $${toAdd[1]},`
      }
    }
  }
  return message
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
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice([i], 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
