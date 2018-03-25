const pixar = {

	brush: document.getElementsByClassName('brush')[0],

	textfield: document.getElementById('color-field'),

	canvas: document.getElementById('canvas'),

	

	generatePixels(){

		for(let i = 0; i <5031;i++){

			const divs = document.createElement('div');

			this.canvas.appendChild(divs);

			divs.classList.add('pixels');

		}

	},

	changeBrush(color){
		
		this.brush.style.backgroundColor = color;


	},


	textInput: document.getElementById('set-color').addEventListener('click',(event)=>{
		
		let colorValue = pixar.textfield.value;

		pixar.changeBrush(colorValue);

		event.preventDefault();
	}),


	
	
	




	

}


pixar.generatePixels()





