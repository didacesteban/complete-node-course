const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=91%20rambla%20sant%20nebridi%20terrassa',
  json: true
}, (err, response, body) => {
  console.log(body);
});
