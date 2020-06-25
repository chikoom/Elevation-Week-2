// Spot Check 1
exDivider('Spot Check 1');

$('.button1').on('click', function(){
  const msg = $(this).closest('div').find('span').text()
  console.log(msg)
})

// Spot Check 2
exDivider('Spot Check 2');

$('.button2').on('click', function(){
  const msg = $(this).siblings('.container').find('p').text()
  console.log(msg)
})


// Exercise 1
exDivider('1');

$('.generator').on('click', function(){

  const comp = []

  const PID = $(this).closest('.processor').attr('id')
  const compDataID = $(this).closest('.computer').data().id
  const BUSnumber = $(this).closest('.computer').find('.BUS').text()

  comp.push({cmp_id: compDataID})

  console.log(`Processor ID: ${PID}`)
  console.log(`Computer's data-id: ${comp[0].cmp_id}`)
  console.log(`BUS: ${BUSnumber}`)

})

$('.validator').on('click', function(){

  const genText = $(this).closest('.computer').find('.generator').text()
  const MB = $(this).closest('.computer').find('.MB').text()
  const QRs = $(this).closest('.computer').find('.QR')


  console.log(`Generator: ${genText}`)
  console.log(`MB: ${MB}`)
  console.log(`QRs:`)
  $( QRs ).each(function() {
    console.log($( this ).text())
  });

})



function exDivider(number) {
  console.log(" ");
  console.log(" ");
  console.log("==========================");
  console.log("Exercise " + number);
  console.log("==========================");
  console.log(" ");
}