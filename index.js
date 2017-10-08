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
  if (!itemsInCart.length){
    console.log("Your shopping cart is empty.")
  }
  if (itemsInCart.length == 1){
    console.log(`In your cart, you have ${itemsInCart[0]}.`)
  }
  if (itemsInCart.length == 2){
    console.log(`In your cart, you have ${itemsInCart[0]} and ${itemsInCart[1]}.`)
  }
  if (itemsInCart.length >= 3){
    console.log(`In your cart, you have ${itemsInCart[0]}, ${itemsInCart[1]}, and ${itemsInCart[2]}.`)
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
var itemsInCart2 = []
for (var x = 0; x < cart3.length; x++){
  var cartKey = Object.keys(cart3[x])
  itemsInCart2.push(`${cartKey} at $${cart3[x][cartKey]}`)
  /*for (var prop in cart3[x]){
    console.log(cart3[x])
  }*/
}
if (!itemsInCart2.length){
  console.log("Your shopping cart is empty.")
}
if (itemsInCart2.length === 1){
  console.log(`In your cart, you have ${itemsInCart2[0]}.`)
}
if (itemsInCart2.length === 2){
  console.log(`In your cart, you have ${itemsInCart2.join(' and ')}.`)
}
if (itemsInCart2.length >= 3){
  console.log(`In your cart, you have ${itemsInCart2.slice(0, itemsInCart2.length-1).join(', ') + ', and '+itemsInCart2(itemsInCart2.length-1)}`)
}
