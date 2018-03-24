const button = $("#set-color");

function setColor() {
	const color = $('#color-field').val();
	let brush = $('.brush')
	brush.css({
		'background-color': color
	})
	event.preventDefault();
}
button.on("click", setColor);

////// Commit 2 is already working when pressing the enter key from inside the input field ////////////////

for (let i = 0; i < 20; i++) {
	const div = $('<div>')
	div.addClass('square')
 	$('body').append(div)
}
