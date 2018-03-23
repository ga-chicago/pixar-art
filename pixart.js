// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
// Use jQuery to select the element and add an event listener
  
 //locate div for brush box
    // <form id="form">
    //  <input type="text" id="color-field"></input>
    //  <button id="set-color">Set Color</button>
    // </form>
    // <div class="brush"></div>
//commit 1
let brushBox = $('.brush');
let button = $('#set-color')
let input = $('input')
 //change color of box
button.on('click', function (event) {
	brushBox.css('background-color', input.val())
	console.log('there was a click')
	event.preventDefault();
})

// commit 2 
	//already happening without writing any code

// Create 20 divs of the "square" class and append them to the body
// Hint: use .append()

const divSquares = () => {
	for(let i = 0; i < 21; i++){
		const div = $('<div>');
		div.addClass('square');
		div.appendTo($('body'))		
	} 	
}

divSquares();


// Add functionality so that when I click on each "square", it changes the 
// color of that individual square to "green"
// Hint: either add the event listener while creating the squares, or listen 
// for events on the body element

let squares = $('.square');

squares.on('click', function () {
	let target = $(event.currentTarget)
	target.css('background-color', 'green')
	console.log('there was a click')
})