const lib = require('./lib');

test('turn movie query str into object', () => {
	expect(lib.queryStringToObj("?t=jaws&apiKey=12345")).toEqual({
		t: "jaws",
		apiKey: "12345"
	})
})

test('return empty object with empty str', () => {
	expect(lib.queryStringToObj("")).toEqual({})
})

test('ignore forgotton question mark and turn query str into object', () => {
	expect(lib.queryStringToObj("t=jaws&apiKey=12345")).toEqual({
		t: "jaws",
		apiKey: "12345"
	})
})

test('send error msg if = or & is forgotten', () => {
	expect(lib.queryStringToObj("tjawsapiKey=12345")).toEqual('Please enter a valid query string')
})

test('send error message if the query str contains spaces', () => {
	expect(lib.queryStringToObj("?t=jaws &apiKey=12345")).toEqual('String cannot contain a space')
})