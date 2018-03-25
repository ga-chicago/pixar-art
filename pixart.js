


document.getElementById('set-color').addEventListener('click',(event)=>{
	

	const color = document.getElementById('color-field').value
	
	document.getElementsByClassName('brush')[0].style.backgroundColor = color;
	
	

	document.getElementById('canvas').addEventListener('mouseover',(event)=>{


		



	})





	// console.log(this);

	// console.log(event);

	// console.log(event.target);

	// console.log(event.currentTarget);
	event.preventDefault();
})


// $('#set-color').on('click',()=>{
// 	alert('Hello');
// })
