const cityOptions = document.getElementById('city-type');
const cities = ['nyc', 'sf', 'la', 'syd', 'atx'];

const getCity = () => {
	for(let i = 0; i < cities.length; i++) { 
		let option = document.createElement('OPTION');
		text = document.createTextNode(cities[i].toUpperCase());
		option.appendChild(text);
		cityOptions.insertBefore(option, cities.lastChild);
	}
}

getCity();

const docBody = document.querySelector('body');

cityOptions.addEventListener('change', e => {
	docBody.classList = '';
	for(let i = 0; i < cities.length; i++) { 
		if (e.target.value == cities[i].toUpperCase()) {
			docBody.classList.add(cities[i]);
		}
	}
})


