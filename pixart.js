// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
// Use jQuery to select the element and add an event listener
  
 //locate div for brush box
    // <form id="form">
    //  <input type="text" id="color-field"></input>
    //  <button id="set-color">Set Color</button>
    // </form>
    // <div class="brush"></div>

let brushBox = $('.brush');
let button = $('#set-color')
let input = $('input')
 //change color of box
button.on('click', function (event) {
	brushBox.css('background-color', input.val())
	console.log('there was a click')
	event.preventDefault();
})

//create something to connect the input value to rgb value property


