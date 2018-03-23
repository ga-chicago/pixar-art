
let $button = $('#set-color');
let brushBox = $('.brush');
let input = $('input');
$button.on('click', (event) => {
	brushBox.css('background-color', input.val())
	console.log('there was a click');
	event.preventDefault();
})
