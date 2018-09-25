console.log('PTV');

// get each line 

const alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
const glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
const sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

// get all of the lines to loops through stations later 

const trainLines = [alamein, glenWaverly, sandringham];

// get line and station index from user input

function getLineAndStation(station) {
	for (let index in trainLines) {
		let line = trainLines[index];
		// console.log('line is ' + line)

		let stationIndex = line.indexOf(station);
		// console.log('stationIndex is ' + stationIndex)
		if (stationIndex !== -1) {
			return { line: line, station: stationIndex };
		} 
	}
}

// find out if user is travelling on singleline or multi 

function singleOrMulti(origin, dest) {
	let origLine = getLineAndStation(origin);
	let destLine = getLineAndStation(dest);
	let lineStops = '';
	console.log(origLine, destLine)

	if (origLine.line == destLine.line) {
		// turn stations into names not indexes
		lineStops = singleLine(origLine.station, destLine.station, origLine.line);
	} else {
		// turn stations into names not indexes
		lineStops = multiLine(origLine.station, destLine.station, origLine.line, destLine.line);
	}
	return lineStops;
}

// function for singleline 

function singleLine(start, end, line) {
	let journey = [];
	let origin = line.indexOf(start);
	let dest = line.indexOf(end);

	if (origin < dest) {
		for (let i = start; i < end + 1; i++) {
				journey.push(line[i]);	
		} 
		return {
			origin: start,
			destination: end,
			journey: journey.join(' ---> '),
			stops: dest - origin
		};
	} else {
		for (let i = start; i > end - 1; i--) {
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

// function for multiline

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
			stops: (secondInterchange - firstPart) + 1
		};
	} else if (firstPart > firstInterchange && secondPart < secondInterchange) {
		return {
			origin: start,
			destination: end,
			journey: firstLine.slice(firstInterchange, firstPart + 1).reverse().join(' ---> ')
			+ ' ---> ' + secondLine.slice(secondPart, secondInterchange).reverse().join(' ---> '),
			stops: firstPart - secondInterchange
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


// display journey on gui

function displayJourney() {
	singleOrMulti()
}


