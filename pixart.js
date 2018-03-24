const button = $("#set-color");

function setColor(element, event) {
	const color = $('#color-field').val();
	element.css({
		'background-color': color
	})
	event.preventDefault();
}

button.click((event) => {
	let brush = $('.brush')
	setColor(brush, event)
});

////// Commit 2 is already working when pressing the enter key from inside the input field ////////////////

for (let i = 0; i < 8000; i++) {
	const div = $('<div>')
	div.addClass('square')
 	$('body').append(div)
}

$('.square').mouseover((event) => {
	let square = $(event.currentTarget)
	setColor(square, event)
})


