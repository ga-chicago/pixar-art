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
  for (let i = 0;  i < 8000; i++) {
    const $div = $('<div>')
    $div.addClass('square')
    $div.appendTo($('body'))
  }
}
createSquare();

//commit 4
//Add functionality so that when I click on each "square",
//it changes the color of that individual square to "green"

$('.square').on('mouseover', (e) => {
  let $target = $(event.currentTarget);
  $target.css('background-color', $input.val());
})

//bonus
// Add a color swatch.
// You should have 3 boxes
const colorSwatch = () => {
  for (let i = 0; i < 3; i++) {
    const $newDiv = $('<div>');
    $newDiv.addClass('swatch')
    $newDiv.appendTo($('.controls'));
  }
}

colorSwatch();

let swatches = $('.swatch');
swatches.css('background-color', 'green')
swatches.css({
  'height' : '100px',
  'width' : '100px',
  'margin' : '10px',
  'display' : 'inline-block'
})

//add the most recent 3 colors used.
//store the colors in an array
// When you click on each of those boxes,
// it should set the current brush color back to that color.
