console.log('friday')

//whent the button is clicked run the func getQuilt
function changeC(event){
	const inp = $('#color-field').val()
	$('.brush').css({
		'background-color': inp
	})
	event.preventDefault();
}

$('#set-color').on('click', changeC)

const makeDiv = () => {
	const $div = $('<div>');
	$div.addClass("square")
	
	$div.appendTo($('body'))
}


for(let i = 1; i <= 8000; i++) {
	makeDiv(i);
}

$('body').on('mouseover', '.square', (event) => {

	//get the background color of the brush box
	

	console.log($('.brush').css('background-color'));

	console.log('the was a click')
	console.log(event.target)
	const xys = $('.brush').css('background-color')
	//set the color of the square to the color you got from the brush
	$(event.target).css('background-color', xys)///this takes away the color
})







