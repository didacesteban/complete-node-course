// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       descrive: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   }else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });


// dc6f79ef9f4096ae70b8af6bac53761a
// https://api.darksky.net/forecast/dc6f79ef9f4096ae70b8af6bac53761a/41.563211,2.0088747

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/dc6f79ef9f4096ae70b8af6bac53761a/41.563211,2.0088747',
  json: true
}, (err, response, body) => {
  if(!err && response.statusCode === 200){
    console.log(body.currently.temperature);
  }else{
    console.log('Unable to fetch weather');
  }
});
