console.log("hello");
//declaring a variable for set color button
let $button = $('#set-color')
let $brushBox = $('.brush')
let $input = $('input')
//commit 1 & 2
// When I click the "Set Color" button
//it should change the color of the "brush" box to the color
//I specify in the input field.
$button.on('click', (e) => {
  $brushBox.css('background-color', $input.val())
  console.log("there was a click");
  event.preventDefault()
})

//commit 3
//Create 20 divs of the "square" class
//and append them to the body


const createSquare = () => {
  for (let i = 0;  i < 20; i++) {
    const $div = $('<div>')
    $div.addClass('square')
    $div.appendTo($('body'))
  }
}
createSquare();
