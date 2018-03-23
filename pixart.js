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
let currentColors = [];
let brushColor = brushBox.css('background-color')

 //change color of box
button.on('click', function (event) {
	event.preventDefault();
	brushBox.css('background-color', input.val())
	brushColor = brushBox.css('background-color')
	swatchArray();
	fillSwatches();
	input.val("");
})

// commit 2 
	//already happening without writing any code

// Create 20 divs of the "square" class and append them to the body
// Hint: use .append()

const divSquares = () => {
	for(let i = 0; i < 8001; i++){
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

squares.on('mouseover', function () {
	let target = $(event.currentTarget)
	target.css('background-color', brushColor)
})


// commit 6
// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
	//already set up in the css file
// Modify your code so that you are creating 8000 divs instead of 20.
	//updated above

// Change the event that changes your box colors from 'click' to 'mouseover'
	//updated above


// Add a color swatch. You should have 3 boxes with the most recent 3 colors used. 
// When you click on each of those boxes, it should set the current brush color back to that color.


const swatchSquares = () => {
	for(let i = 0; i < 3; i++){
		const div = $('<div>');
		div.addClass('swatch');
		div.attr('id', 'swatch-' + i)
		div.appendTo($('.controls'))		
	} 	
}

swatchSquares();

let swatches = $('.swatch');
swatches.css('background-color', '#E7E5DB')
swatches.css({
	'width': '100px',
	'height': '100px',
	'margin': '15px 10px',
	'display': 'inline-block'
});

//function that calls the ID for the thing i clicked on
const getID = () => {
	
}

swatches.on('click', function (event) {
		let target = $(event.currentTarget)
	// target.css('background-color', ())
})

const swatchArray = () => {
	currentColors.unshift(input.val())
}

let swatch0 = $('#swatch-0')
let swatch1 = $('#swatch-1')
let swatch2 = $('#swatch-2')

const fillSwatches = () => {
	swatch0.css('background-color', currentColors[0])
	swatch1.css('background-color', currentColors[1])
	swatch2.css('background-color', currentColors[2])
}






