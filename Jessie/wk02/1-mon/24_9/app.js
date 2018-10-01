console.log('PTV');

// get each line 

const alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
const glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
const sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

// get all of the lines to loops through stations later 

const trainLines = [alamein, glenWaverly, sandringham];


function getLineAndStation(station) {
	for (let index of trainLines) {
		let line = index;

		let stationIndex = line.indexOf(station);
		if (stationIndex !== -1) {
			return { line: line, station: line[stationIndex] };
		} 
	}
}

function singleOrMulti(origin, dest) {
	let origLine = getLineAndStation(origin);
	let destLine = getLineAndStation(dest);
	let lineStops = '';

	if (origLine == destLine) {
		lineStops = singleLine(origLine.station, destLine.station, origLine.line);
	} else {
		lineStops = multiLine(origLine.station, destLine.station, origLine.line, destLine.line);
	}
	return lineStops;
}

function singleLine(start, end, line) {
	let journey = [];
	let origin = line.indexOf(start);
	let dest = line.indexOf(end);

	if (origin < dest) {
		for (let i = origin; i < dest + 1; i++) {
				journey.push(line[i]);	
		} 
		return {
			origin: start,
			destination: end,
			journey: journey.join(' ---> '),
			stops: dest - origin
		};
	} else {
		for (let i = origin; i > dest - 1; i--) {
			journey.push(line[i]);
		}
		return {
			origin: start,
			destination: end,
			journey: journey.join(' ---> '),
			stops: origin - dest
		};
	}
}

function multiLine(start, end, firstLine, secondLine) {
	const firstInterchange = firstLine.indexOf('Richmond');
	const secondInterchange = secondLine.indexOf('Richmond');
	let firstPart = firstLine.indexOf(start);
	let secondPart = secondLine.indexOf(end);

	if (firstPart < firstInterchange && secondPart > secondInterchange) { 
		return {
			origin: start,
			destination: end,
			journey: firstLine.slice(firstPart, firstInterchange).join(' ---> ') 
			+ ' ---> ' + secondLine.slice(secondInterchange, secondPart + 1).join(' ---> '),
			stops: (firstInterchange - firstPart) + (secondPart - secondInterchange)
		};
	} else if (firstPart < firstInterchange && secondPart < secondInterchange) { 
		return {
			origin: start,
			destination: end,
			journey: firstLine.slice(firstPart, firstInterchange).join(' ---> ')
			+ ' ---> ' + secondLine.slice(secondPart, secondInterchange + 1).reverse().join(' ---> '),
			stops: (firstInterchange - firstPart) + secondPart + secondInterchange
		};
	} else if (firstPart > firstInterchange && secondPart < secondInterchange) {
		return {
			origin: start,
			destination: end,
			journey: firstLine.slice(firstInterchange, firstPart + 1).reverse().join(' ---> ')
			+ ' ---> ' + secondLine.slice(secondPart, secondInterchange).reverse().join(' ---> '),
			stops: (firstInterchange + firstPart) - (secondPart + secondInterchange)
		};
	} else {
		return {
			origin: start,
			destination: end,
			journey: firstLine.slice(firstInterchange, firstPart + 1).reverse().join(' ---> ')
			+ ' ---> ' + secondLine.slice(secondInterchange + 1, secondPart + 1).join(' ---> '),
			stops: firstPart - firstInterchange + secondPart - secondInterchange
		};
	}
}
 
console.log(singleOrMulti('Glenferrie', 'Tooronga'));
console.log(singleOrMulti('Flagstaff', 'Glenferrie'));
console.log(singleOrMulti('Richmond', 'Hawthorn'));
console.log(singleOrMulti('Windsor', 'Flinders Street'));
console.log(singleOrMulti('Southern Cross', 'Flagstaff'));


// display journey on gui

const originInput = document.getElementById('origin');
const destInput = document.getElementById('destination');
const routeBtn = document.getElementById('submit');
const displayResult = document.getElementById('result');


function updateDisplay() {
	displayResult.innerHTML = lineStops // what to put here
}

routeBtn.addEventListener('click', () => {
	singleOrMulti(originInput.value, destInput.value);
	updateDisplay();
});

