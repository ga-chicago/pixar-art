console.log("Linked");



// Commit 1
// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
// Use jQuery to select the element and add an event listener

// Change color of brush to be whatever color is entered in the text box

// $(".brush").css("background", "red")

const button = $("button")

const text = $("#color-field")


// const input =

// console.log(text)

button.on("click", function(event) {
	console.log(event)
	event.preventDefault()

const colorChange = text.val()

const brush = $(".brush")

brush.css("background-color", colorChange)

})


// Commit 3
// Create 20 divs of the "square" class and append them to the body
// Hint: use .append()

const makeDiv = () => {



	for(let i = 0; i < 20; i++) {
	const div = $("<div class='square')>")
	div.appendTo($("body"))
}
	
}

makeDiv();
