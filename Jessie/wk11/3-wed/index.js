const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const PORT = 8000;

const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.use(express.static('public'));

app.get('/:id', (req, res) => {
  const randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  const randColor = colors[Math.floor(Math.random() * compliments.length)];
  const queryParam = req.params.id
  res.render('index', {randColor, randCompliment, queryParam})
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})