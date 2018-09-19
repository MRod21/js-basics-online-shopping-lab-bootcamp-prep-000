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
  let total = 0
  for(let i = 0; i < cart.length; i++){
    let toAdd = Object.values(cart[i])
    total += toAdd[1]
  }
  return total
}

function removeFromCart(item) {
   for(let i = 0; i < cart.length; i++){
    let toCheck = Object.values(cart[i])
    if(toCheck[0] === item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}	

function placeOrder(cardNumber) {
  // write your code here
}
