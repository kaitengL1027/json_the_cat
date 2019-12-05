const request = require('request');
const args = process.argv;
let input = args.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + input[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (body === '[]') {
    console.log("Breed Not Found!");
  } else {
    const data = JSON.parse(body);
    console.log(data[0]);
  }

});