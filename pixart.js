console.log("Linked");



// Commit 1
// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
// Use jQuery to select the element and add an event listener

// Change color of brush to be whatever color is entered in the text box

// $(".brush").css("background", "red")


// This is for the three new brushes or squares. looping through to create them with a class of recent colors. 
// appending it to the div class that was already created 
const newBrush = function() {

	for(let i = 0; i < 3; i++) {

		const div = $("<div class='recent-colors'>");

	div.appendTo($(".controls"))	

	}


}

newBrush();





const button = $("button")
//finding the button

const text = $("#color-field")
// the text back where we can type 




// const input =

// console.log(text)

button.on("click", function(event) {
	console.log(event)
	event.preventDefault()

const colorChange = text.val()
// changing text so it can take a input value
// text was changed to color to colorfield class which was where would type 


// changing the background color of the three additional squares addeds
$(".recent-colors").eq(2).css("background-color", $(".recent-colors").eq(1).css("background-color"))
$(".recent-colors").eq(1).css("background-color", $(".recent-colors").eq(0).css("background-color"))
$(".recent-colors").eq(0).css("background-color", $(".brush").css("background-color"))



const brush = $(".brush")

brush.css("background-color", colorChange)

})


// Commit 3
// Create 20 divs of the "square" class and append them to the body
// Hint: use .append()

const makeDiv = () => {



	for(let i = 0; i < 8000; i++) {
	const div = $("<div class='square')>")
	div.appendTo($("body"))
}
	
}

makeDiv();







$(".square").on("mouseover", function(event) {
	 // console.log(event.currentTarget)
	const changeSquare = $(event.currentTarget)
	console.log(changeSquare) 
	changeSquare.css("background-color", $(".brush").css("background-color"))
//changing color to whatever the background color of the brush is 
})

//above
// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// Hint: either add the event listener while creating the squares, or listen for events on the body elemen

// Commit 6
// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture!



