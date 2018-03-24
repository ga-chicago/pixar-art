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
