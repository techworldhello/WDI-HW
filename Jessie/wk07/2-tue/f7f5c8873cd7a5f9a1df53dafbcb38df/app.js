const form = document.querySelector('form');
const docBody = document.querySelector('body');

form.addEventListener('click', (event) => {
	const input = document.querySelector('input').value;
	event.preventDefault();
	docBody.style.background = '';
	docBody.style.background = input;
	squares(input);
})

function squares(inputCol) {
	for(let i = 0; i <= 1000; i++) {
		const squares = document.createElement('div');
		squares.classList.add("squares");
		squares.style.cssText = "width: 20px; height: 20px; background-color: white;";
		squares.addEventListener('click', (e) => {
			e.target.style.background = inputCol;
		})
		docBody.appendChild(squares);
	}
}

