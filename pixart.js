
let $button = $('#set-color');
let brushBox = $('.brush');
let input = $('input');

//Commit 1 & 2
$button.on('click', (event) => {
	brushBox.css('background-color', input.val())
	console.log('there was a click');
	event.preventDefault();
})

//Commit 3
//Create 20 divs of the "square" class and append them to the body

const addSquare = () => {

	for(let i = 0; i < 21; i++){

	// Create div element of the square class
	const $div = $('<div>');
	$div.addClass('square');

	// Append to the body
	$div.appendTo($('body'));
	
	}
	
}

addSquare();
