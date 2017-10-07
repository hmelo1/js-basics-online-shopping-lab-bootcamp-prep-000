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
  var cartItems = {[item]: Math.floor(Math.random()*100)}
  console.log(`${item} has been added to your cart.`)
  cart.push(cartItems)
  return cart
}

function viewCart() {
  // write your code here

  if (!cart.length){
    console.log("Your shopping cart is empty.")
  }
  if (cart2.length === 1){
    console.log(`In your cart, you have ${cart2}`)
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
var cart2 = {lemons: 64, mangos: 95, bananas: 32}

for (var prop in cart2){
  if (Object.keys(cart2).length == 1){
    console.log(`In your cart, you have ${prop} at ${cart2[prop]}`)
  }
  if (Object.keys(cart2).length == 2 ){
    console.log(`In your cart, you have ${prop} at ${cart2[prop]}`)
  }
  if (Object.keys(cart2).length >= 3){
    console.log(`In your cart, you have ${prop} at ${cart2[prop]}`)
  }
}
