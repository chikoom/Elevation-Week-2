



// Exercise 1
exDivider('1');

$('#addHuman').click(function(){
  if($('#humanName').val()){
    $('#humanList').append(`<li class="human">${$('#humanName').val()}</li>`)
    $('#humanName').val('')
  }else{
    alert('Please Enter Name')
  }
})


// Exercise 2
exDivider('2');

$('#humanList').on('click', '.human', function(){
  $(this).remove()
})



// Exercise 3
exDivider('3');

$('body').append('<div id="box1" class="box"></div>')
$('body').append('<div id="box2" class="box"></div>')

let switched = false;
$('body').on('mouseout', '.box', function(){

  const color1 = (switched) ? "red" : "#8e44ad"
  const color2 = (switched) ? "#8e44ad" : "red"

  $('#box1').css('background-color', color1)
  $('#box2').css('background-color', color2)

  switched = !switched

})


// Exercise 4
exDivider('4');


const cart = []

const itemInCart = (itemName) => {
  for(let item of cart){
    if(item.name === itemName){
      return true
    }
  }
  return false
}

const insertToCart = (itemName) => {
  cart.push({name:itemName, amount:1})
  $('#cart').append(`<div data-item="${itemName}" class="cart-item">${itemName}<span class="amount"> x1</span></div>`)
}

const updateAmountDiv = (item) => {
  for(let itemDiv of $('.cart-item')){
    if($(itemDiv).data().item === item.name){
      $(itemDiv).find('.amount').text(` x${item.amount}`)
    }
  }
}

const increaseAmount = (itemName) => {
  const item = getItemFromCart(itemName)
  item.amount++
  updateAmountDiv(item)
}

const decreaseAmount = (itemName) => {
  const item = getItemFromCart(itemName)
  item.amount--
  updateAmountDiv(item)
}

const getItemFromCart = (itemName) => {
  for(let item of cart){
    if(item.name === itemName){
      return item
    }
  }
}

const addToCart = (itemName) => {

  if (itemInCart(itemName)) increaseAmount(itemName)

  else insertToCart(itemName)
  
}

const removeFromCart = (itemName) => {
  for(let itemIndex in cart){
    let item = cart[itemIndex]

    if(item.name === itemName){
      if(item.amount === 1){
        cart.splice(itemIndex,1)
        return true
      } else {
        decreaseAmount(itemName)
      }
    }
  }
}

$('.item').click(function(){
  if($(this).data().instock){
    addToCart($(this).text())
  }
})

$('#cart').on('click', '.cart-item', function(){
  if (removeFromCart($(this).data().item)){
    $(this).remove()
  }
  console.log(cart)
})


/*

Make every item in the cart removable
Instead of adding the same item over and over, change it so it says "Shoes x2", for example

*/
// Exercise 5
exDivider('5');

const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" }
]

for(let fruit of fruits) {
  $('#basket').append(`<div class="${fruit.color}">${fruit.name}</div>`)
}

// Exercise 6
exDivider('6');

console.log($('span'))
for(let element of $('span')){
  $(element).addClass('picker')
  $(element).css('background-color', $(element).data().color)
  $(element).click(function(){
    $('.pbox').css('background-color', $(element).data().color)
  })
}










function exDivider(number) {
  console.log(" ");
  console.log(" ");
  console.log("==========================");
  console.log("Exercise " + number);
  console.log("==========================");
  console.log(" ");
}