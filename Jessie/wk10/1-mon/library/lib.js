const queryStringToObj = str => {
	if (str == '') return {};
	if (!str.includes('&') || !str.includes('=')) return 'Please enter a valid query string';
	if (str.includes(' ')) return 'String cannot contain a space';

	const arrKeyVal = str.replace(/\?/, '').split('&').map(elem => elem.split('='));
	return arrKeyVal.reduce((key, val) => {
	    key[val[0]] = val[1];
	    return key;
	}, {});
}

module.exports = queryStringToObj;