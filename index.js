var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  var cartItems = new Object({[item]: Math.floor(Math.random()*100)})
  cart.push(cartItems)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  var itemsInCart = []
  for (var i = 0; i < cart.length; i++){
    var cartKey = Object.keys(cart[i])
    itemsInCart.push(`${cartKey} at $${cart[i][cartKey]}`)
  }
  var cartItems = itemsInCart.length
  if (!itemsInCart.length){
    console.log("Your shopping cart is empty.")
  }
  if (cartItems === 1){
    console.log(`In your cart, you have ${itemsInCart[0]}.`)
  }
  if (cartItems === 2){
    console.log(`In your cart, you have ${itemsInCart.join(' and ')}.`)
  }
  if (cartItems >= 3){
    console.log(`In your cart, you have ${itemsInCart.slice(0, cartItems-1).join(', ')}, and ${itemsInCart.slice(cartItems-1)}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
