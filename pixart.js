function setColor(event) {
	event.preventDefault();
	let color = $('#color-field').val();
	if(color) $('.brush').css('background-color',color);
}

$('#set-color').on('click', setColor);


