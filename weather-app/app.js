const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      descrive: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.a);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (err, response, body) => {
  if(err) {
    console.log('Unable to connect to Google Servers.');
  } else if(body.status === 'ZERO_RESULTS'){
    console.log('Invalid address');
  } else if(body.status === 'OK'){
    console.log(`Address lat and lng: ${body.results[0].geometry.location.lat}, ${body.results[0].geometry.location.lng}`);
  }
});
