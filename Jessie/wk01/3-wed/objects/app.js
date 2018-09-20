console.log('up and running')

/*

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

*/

var recipes = {
	title: 'cookies',
	serves: 13,
	ingredients: ['cinnamon', 'chocolate', 'flour', 'butter', 'milk']
}

// log all

for(var prop in recipes) {
  console.log(prop, recipes[prop]);  
}

console.log(recipes.title);
console.log(recipes.serves);
console.log(recipes.ingredients.join('\n'));

/*

The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien". 

Now use an if/else statement to change the output depending on whether you read it yet or not. 
If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

*/

var books = [
	{
	title: 'Da Vinci Code',
	author: 'Dan Brown',
	alreadyRead: true
	},
	{
	title: 'Harry Potter',
	author: 'J.K Rowling',
	alreadyRead: false
	},
	{
	title: 'The Woman in the Window',
	author: 'A.J. Finn',
	alreadyRead: false
	},
	{
	title: 'Holes',
	author: 'Louis Sachar',
	alreadyRead: true
	}
];

for (var i = 0; i < books.length; i++) {
	if (books[i].alreadyRead) {
		console.log("You've already read " + books[i].title + ' by ' + books[i].author);
	} else {
		console.log("You still need to read " + books[i].title + ' by ' + books[i].author);
	}
}

/*

The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

*/

var movie = {
	title: 'Misson Impossible - Fallout',
	duration: 120,
	stars: ['Tom Cruise', ' Henry Cavill', ' Rebecca Ferguson', ' Vanessa Kirby', ' Sean Harris',]
};

function movieInfo() {
	console.log(movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars + '.');
}

movieInfo();





