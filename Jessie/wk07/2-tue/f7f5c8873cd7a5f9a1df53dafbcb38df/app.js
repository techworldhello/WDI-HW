const setColor = document.querySelector('.color-setter');
const searchMovie = document.querySelector('.movie-searcher');
const docBody = document.querySelector('body');

setColor.addEventListener('click', event => {
	event.preventDefault();
	const colorInput = document.querySelector('.color-input').value;
	docBody.style.background = '';
	docBody.style.background = colorInput;
})


function createSquares() {
	for(let i = 0; i <= 1000; i++) {
		const squares = document.createElement('div');
		squares.classList.add("square");
		squares.addEventListener('mouseover', (e) => {
			e.target.style.background = squares.classList.add("brush");
		})
		docBody.appendChild(squares);
	}
}

createSquares();

const poster = document.querySelector('#displayPoster');

searchMovie.addEventListener('submit', event => {
	event.preventDefault();
	poster.innerHTML = '';
	const displayMoviePoster = res => {
		poster.src = res.Poster;
	}
	const movieTitleInput = document.querySelector('.movie-input').value;
	const url = `http://www.omdbapi.com/?t=${movieTitleInput}&apikey=2f6435d9`;
	$.ajax({ url: url }).done(displayMoviePoster);
})
