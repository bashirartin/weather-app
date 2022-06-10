const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=cbc9cf1fb24400709300edaef8b6c353&query=37.8267,-122.4233&units=s'


request({url: url, json: true}, (error, Response) => {
    const temp = Response.body.current.temperature
    const precip = Response.body.current.precip
    const feelsLike = Response.body.current.feelslike
    console.log(Response.body.current.weather_descriptions[0]+". It's currently "+temp+" degrees out and It's feels like "+feelsLike+" degrees. There's a "+
    precip+"% chance of rain.")
})