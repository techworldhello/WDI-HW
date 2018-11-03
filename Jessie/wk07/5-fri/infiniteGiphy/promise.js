const form = document.querySelector('form');
const giphyDiv = document.querySelector('.show');
const container = document.querySelector('.container');

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

const getResults = url => {
	fetch(url)
	.then(res => res.json())
		.then(json => json.data.map (gif => {
			const perImg = gif.images.original.url;
			const imgTag = document.createElement('img');
			const imgDiv = createDiv('perSet');

			imgTag.src = perImg;
			imgDiv.appendChild(imgTag);
			giphyDiv.appendChild(imgDiv);
			
			const deleteButton = createButton('Delete');
			imgDiv.appendChild(deleteButton);

			deleteButton.addEventListener('click', e => {
				e.target.closest('.perSet').remove();
			})
		}))
		.catch(err => console.error(err))
}

const limitNum = 5;
let offsetNum = 0;

form.addEventListener('submit', event => {
	event.preventDefault();
	giphyDiv.innerHTML = '';

	const query = document.querySelector('input').value;
	const searchType = 'funny';

	getResults(`https://api.giphy.com/v1/gifs/search?q=${searchType}+${query}&limit=${limitNum}&offset=${offsetNum}&api_key=g1wkyl1ryPNwKJ7L1Au2Pmk28oVMmkmZ`);

	const loadMoreImgs = createButton('Load more');
	container.appendChild(loadMoreImgs);

	loadMoreImgs.addEventListener('click', () => {
		let newOffset = offsetNum += 5;
		getResults(`https://api.giphy.com/v1/gifs/search?q=${searchType}+${query}&limit=${limitNum}&offset=${newOffset}&api_key=g1wkyl1ryPNwKJ7L1Au2Pmk28oVMmkmZ`);
	})
})




