const request = require('postman-request');
const chalk = require('chalk');
const forcast = (latitude,longitude,callback) => {
    console.log('latitude',latitude,longitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=13ca0c89d8cd04873921fbc32a542965&units=metric`
    request({url, json:true}, function (error,response,body) {
    
    if (error) {
        callback(chalk.bgRed.bold('Error in weather app'), undefined);
    } else if (response.body.cod !== 200) {
        console.log('object',response.body);
        callback(chalk.bgRed.bold('Location not found'), undefined)
    } else  {
        callback(undefined,`in this location temp is ${body.main.temp} celsius and rain chance is ${body.clouds.all}%`); 
    }
    });
}

module.exports = forcast;