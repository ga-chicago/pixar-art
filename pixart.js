const button = $("#set-color");
$brushColor = ''
$count = 0

function setSwatch(event) {
	let swatches = $('.swatch')
	if ($count === swatches.length) { $count = 0 }
	setColor(swatches.eq($count), event)
	$count++
}

function setColor(element, event) {
	element.css({
		'background-color': $brushColor
	})
	event.preventDefault();
}

button.click((event) => {
	let brush = $('.brush')
	$brushColor = $('#color-field').val();
	setColor(brush, event)
	setSwatch(event)
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

for (let i = 0; i < 3; i++) {
	const swatch = $('<div>')
	swatch.addClass('swatch')
	$('.controls').append(swatch)
}

$('.swatch').click((event) => {
	$brushColor = $(event.currentTarget).css('background-color')
	let brush = $('.brush')
	setColor(brush, event)
})


