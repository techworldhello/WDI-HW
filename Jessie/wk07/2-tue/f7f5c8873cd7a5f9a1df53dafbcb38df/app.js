const form = document.querySelector('form');
const docBody = document.querySelector('body');
const button = document.querySelector('button');

form.addEventListener('click', (event) => {
	event.preventDefault();
	docBody.style.background = '';
	const input = document.querySelector('input').value;
	docBody.style.background = input;

})


for(let i = 0; i <= 1000; i++) {
	const squares = document.createElement('div');
	squares.classList.add("squares");
	squares.style.cssText = "width: 20px; height: 20px;";
	squares.addEventListener('click', (e) => {
		e.target.style.background = 'green';
	})
	docBody.appendChild(squares);
}