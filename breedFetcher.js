const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {

    if (error) {
      callback(error);
    }

    if (body === '[]') {
      callback("Breed Not Exist");
    } 
    
    else {
      const data = JSON.parse(body);
      callback(null, String(data[0].description));
    }
  });
};

module.exports = { fetchBreedDescription };