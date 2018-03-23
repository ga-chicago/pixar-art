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


for(let i = 1; i <= 20; i++) {
	makeDiv(i);
}









