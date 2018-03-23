console.log("hello");
let $button = $('#set-color')
let $brushBox = $('.brush')
let $input = $('input')

$button.on('click', (e) => {
  $brushBox.css('background-color', $input.val())
  console.log("there was a click");
  event.preventDefault()
})

// // When I click the "Set Color" button
// //declaring a variable for set color button
// const $setColor = $('#set-color')
//
// $setColor.on('click', (e) => {
// //fuction here need to change the color of "brush box"
// //to the color specified
//
//
//
// getColor(){
//     const color = $("#color-field").input.val()
//     return ??
//   }
// getColor();
//
//  setBrush() {
//    const brush = $('.brush')
//  }
// setBrush();
