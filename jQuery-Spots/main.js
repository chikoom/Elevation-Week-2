
const $h1 = $('h1')
console.log($h1)

$(".red-div").css("color", "red")
$("#green-div").css("color", "green")
$("#pink-div").css("color", "pink")
$("#brown-div").css("color", "brown")

$("#b1").addClass("box")
$("#b2").addClass("box")


$('#my-input').val('Terabyte')


$('.hoverMe').on('mouseover', function(){
  $(this).addClass('blueBox')
})
$('.hoverMe').on('mouseout', function(){
  $(this).removeClass('blueBox')
})

$('#buttonAlert').click(function(){
  alert($('#my-input2').val())
})


const barcode = $('#dataCheck').data().barcode 
const expiration = $('#dataCheck').data().expirationDate

console.log($('#dataCheck').data())

console.log(`The item with barcode ${barcode} will expire on ${expiration}`)


$('.box2').hover(function(){
  $(this).css('background-color', 'yellow')
})


$(".feedme").on("click", function(){
  let divCopy = `<div class="feedme">${$(this).text()}</div>`
  
  $("body").append(divCopy)
})



const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" }
]

for(let name of names){
  $("body").append(`<div>${name.first} ${name.last}</div>`)
}

$('.removeMe').hover(function(){
  $('h2').remove('.removeMe')
})


$('#blogButton').click(function(){
  $('#blogs').append('<div class="blog">This is a post</div>')
})

$('#blogs').on('click','.blog',function(){
  $(this).text('BLAAAA')
})


