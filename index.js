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
  var itemsInCart = []
  for (var prop in cart){
    itemsInCart.push(`${prop} at $${cart[prop]}`)
  }
  if (!cart.length){
    console.log("Your shopping cart is empty.")
  }
  if (cart.length == 1){
    console.log(`In your cart, you have ${cart[0]}.`)
  }
  if (cart.length == 2){
    console.log(`In your cart, you have ${cart[0]} and ${cart[1]}.`)
  }
  if (cart.length >= 3){
    console.log(`In your cart, you have ${cart[0]}, ${cart[1]}, and ${cart[2]}.`)
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
//for (let i = 0; i < Object.keys(cart2).length; i++){
  //itemsInCart.push(cart2)

/*for (var prop in cart2){
  itemsInCart.push(`${prop} at $${cart2[prop]}`)
}
if (Object.keys(cart2).length == 1){
  console.log(`In your cart, you have ${itemsInCart[0]}.`)
}
else if (Object.keys(cart2).length == 2){
  console.log(`In your cart, you have ${itemsInCart[0]} and ${itemsInCart[1]}.`)
}
else if (Object.keys(cart2).length >= 3){
  console.log(`In your cart, you have ${itemsInCart[0]}, ${itemsInCart[1]}, and ${itemsInCart[2]}.`)
}
  //move the if else out of the for. FOR should move items into array and if statements print of their own with array

/*if (Object.keys(cart2).length === 1){
  console.log(`In your cart, you have ${prop} at ${cart2[prop]}`)
}
if (Object.keys(cart2).length === 2 ){
  console.log(`In your cart, you have ${prop} at ${cart2[prop]}`)
}
if (Object.keys(cart2).length >= 3){
  console.log(`In your cart, you have ${prop} at ${cart2[prop]}`)
}*/


var cart3 = [
  {"bananas": 64},
  {"mangos": 72},
  {"oranges": 91}
]
console.log(cart3[0].prop)

var cart2 = {
  "bananas": 64,
  "mangos": 72,
  "oranges": 91
}
for (var prop in cart2){
  console.log(`${prop} at $${cart2[prop]}`)
}
