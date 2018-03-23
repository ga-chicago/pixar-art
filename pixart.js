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












