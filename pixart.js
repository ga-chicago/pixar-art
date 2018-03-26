
let $button = $('#set-color');
let $brushBox = $('.brush');
let $input = $('input');

//Commit 1 & 2
$button.on('click', (event) => {
	$brushBox.css('background-color', $input.val())
	console.log('there was a click');
	event.preventDefault();
})

//Commit 3
// Create 20 divs of the "square" class and append them to the body

const addSquare = () => {
	// Define number of squares
	for(let i = 0; i < 8001; i++){

	// Create div element of the square class
	const $div = $('<div>');
	$div.addClass('square');

	// Append to the body
	$div.appendTo($('body'));
	
	}
	
}

addSquare();

//Commit 4
// Add functionality so that when I click on each "square", 
// it changes the color of that individual square to "green"
// Hint: either add the event listener while creating the squares, 
// or listen for events on the body element

$('.square').on('mouseover', () => {
	let $target = $(event.currentTarget);
	//$square = $('.square');
	console.log('click');
	$target.css('background-color', $input.val());
})
