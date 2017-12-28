const request = require('request');

var getWeather = (options, callback) => {
  request({
    url: `https://api.darksky.net/forecast/dc6f79ef9f4096ae70b8af6bac53761a/${options.lat},${options.lng}`,
    json: true
  }, (err, response, body) => {
    if(!err && response.statusCode === 200){
      callback(null, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }else{
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
