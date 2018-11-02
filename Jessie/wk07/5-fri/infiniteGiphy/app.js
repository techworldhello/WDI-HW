const form = document.querySelector('form');
const giphyDiv = document.querySelector('.show');

const createButton = name => {
	const button = document.createElement('button');
	button.innerHTML = name;
	return button;
}

const createDiv = name => {
	const perSet = document.createElement('div');
	perSet.classList.add(name);
	return perSet;
}

form.addEventListener('submit', event => {
	event.preventDefault();
	giphyDiv.innerHTML = '';

	const query = document.querySelector('input').value;
	const searchType = 'funny';
	const url = `http://api.giphy.com/v1/gifs/search?q=${searchType}+${query}&api_key=g1wkyl1ryPNwKJ7L1Au2Pmk28oVMmkmZ&limit=5`;

	$.ajax({ url: url }).done(res => res.data.map(gif => {
		const perImg = gif.images.original.url;
		const imgTag = document.createElement('img');
		const imgDiv = createDiv('perSet')

		imgTag.src = perImg;
		imgDiv.appendChild(imgTag);
		giphyDiv.appendChild(imgDiv)
		
		const deleteButton = createButton('Delete');
		imgDiv.appendChild(deleteButton);

		deleteButton.addEventListener('click', e => {
			e.target.closest('.perSet').remove();
		})
		// console.log(perImg)
	}));
})

const everyFiveResults = () => {
	
}

window.onscroll = everyFiveResults;


// async function gif() {
// 	const res = await fetch(url);
// 	const json = await res.json(); 
	
// }







