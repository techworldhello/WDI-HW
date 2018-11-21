const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=';

const searchQuery = process.argv.slice(2);

const units = '&units=metric';
const apiKey = '&appid=2d30d8205359a3e685a976379c0d6ff0';

request(`${url}${searchQuery}${units}${apiKey}`, (error, response, body) => {
  console.log(`${JSON.parse(body).main.temp} celsius`);
});