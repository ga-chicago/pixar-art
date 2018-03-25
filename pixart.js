
const pixar = {

	//The Brush Div
	brush: document.getElementsByClassName('brush')[0],
	//Input Box
	textfield: document.getElementById('color-field'),

	canvas: document.getElementById('canvas'),

	
	//Make Pixels
	generatePixels(){

		for(let i = 0; i <5031;i++){

			const divs = document.createElement('div');

			this.canvas.appendChild(divs);


			//Adds Class To Each Pixel
			divs.classList.add('pixels');

		}

	},

	//Changes Brush Color When Button IS clicked
	changeBrush(color){
		
		this.brush.style.backgroundColor = color;



	},


	//Event Lister For click
	textInput: document.getElementById('set-color').addEventListener('click',(event)=>{
		//Get The Color input Value 
		let colorValue = pixar.textfield.value;
		//Calls Function Above To Change color of brush based on input
		pixar.changeBrush(colorValue);

		// Prevents From Reloading
		event.preventDefault();
	}),

	
		// Listen For hover over Pixels
		Paint: canvas.addEventListener('mouseover',function(event){



		//Changes Pixel Color
		event.target.style.backgroundColor = pixar.brush.style.backgroundColor ;




		})

	}	




//Function To Generate Pixels
 pixar.generatePixels()





