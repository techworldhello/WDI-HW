const queryStringToObj = str => {
	if (str == '') return {};
	if (!str.includes('&') || !str.includes('=')) return 'Please enter a valid query string';
	if (str.includes(' ')) {
		str.replace(/ /g, '');
	}
	
	const arrKeyVal = str.replace(/\?/, '').split('&').map(elem => elem.split('='));
	console.log(arrKeyVal)
	return arrKeyVal.reduce((key, val) => {
	    key[val[0].trim()] = val[1].trim();
	    return key;
	}, {});
}

module.exports = queryStringToObj;