const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(results.address);
    weather.getWeather({lat:results.latitude, lng:results.longitude}, (errorMessage, weatherResults) => {
      if(errorMessage) {
        console.log(errorMessage);
      }else{
        console.log(`It's currently ${weatherResults.temperature}`);
      }
    });
  }
});
