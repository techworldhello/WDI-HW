const form = document.querySelector('form');
const docBody = document.querySelector('body');

form.addEventListener('click', (event) => {
	event.preventDefault();
	docBody.style.background = '';

	const input = document.querySelector('input').value;
	docBody.style.background = input;
})