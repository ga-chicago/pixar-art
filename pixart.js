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


// in value

// .val() wheneveratever you put in 






// HINT: You will notice that the page refreshes whenever you click the button. You need to prevent this from happening using a method you have not used before. Google "javascript event prevent default". You can also reference this portion of the Events & Callbacks lesson plan.