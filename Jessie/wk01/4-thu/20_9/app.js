/*
1. Max of two numbers:
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript. Do some Googling to figure this out if you forget how conditionals work.

2. Vowel Count:
Return the number of occurrences of vowels in a word. Vowels are a, e, i, o, u, and y

Function signature (only look at this after you've thought about what it should look like)
3. longest word
Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
*/


function maxOfTwoNumbers(num1, num2) {
	if (num1 < num2) {
		return num2;
	} else {
		return num1;
	}
}



function vowelCount(str) {
	return str.match(/[aeiouy]/gi).length;
}



let moods = ['happy', 'sad', 'excited'];

function longestWord(arr) {
	let strings = arr.join(' ').split(' ');
	let wordLength = 0;

	strings.forEach(string => {
		if (string.length > wordLength) {
			wordLength = string.length;
		}
	});
	return wordLength;
}


// moneytree not working 

const base = 13;
const increment = 2;
const sign = '$';
const spaces = ' ';


for (let i = 1; i <= base; i = i + increment) {
	let number_of_spaces = ((base - i)/2);
	let pattern = spaces.repeat(number_of_spaces) + sign.repeat(i)
		
	console.log(pattern);
}

