function setColor(event) {
	event.preventDefault();
	let color = $('#color-field').val();
	if(color) $('.brush').css('background-color',color);

	let counter = $('#counter')
	let i = counter.html();
	i = parseInt(i);
	$('.swatch').eq(i%3).css('background-color',color);
	i++;
	counter.html(i);
}

$('#set-color').on('click', setColor);

function makeSquare() {
	let square = $('<div>');
	square.addClass('square');
	square.on('mouseover',setBackground);
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

makeSquares(8000);

function setBackground(event) {
	console.log(event);
	let color = $('.brush').css('background-color');

	$(event.currentTarget).css('background-color',color);
}

function setBrush(event) {
	let color = $(event.currentTarget).css('background-color');
	$('.brush').css('background-color',color);
}

$('.swatch').on('click',setBrush);
