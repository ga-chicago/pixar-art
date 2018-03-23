function setColor(event) {
	event.preventDefault();
	let color = $('#color-field').val();
	if(color) $('.brush').css('background-color',color);
}

$('#set-color').on('click', setColor);

function makeSquare() {
	let square = $('<div>');
	square.addClass('square');
	square.on('click',setBackground);
	return square;
}

function makeSquares(amount) {
	let square;
	let body = $('body');

	for(let i = 0;i<amount;i++) {
		square = makeSquare();
		body.append(square);
	}
}

makeSquares(20);

function setBackground(event) {
	console.log(event);
	let color = $('.brush').css('background-color');

	$(event.currentTarget).css('background-color',color);
}
