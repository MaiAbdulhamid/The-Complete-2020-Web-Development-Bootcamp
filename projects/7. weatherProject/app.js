const express = require('express');
const https = require('https')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

//request from our server to client server
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
//request from client to our server
app.post('/', function(req, res){
  console.log('Post Response here');
  //url parts
  const query = req.body.cityName;
  const  apiKey = '3b712ebc109bc87b541a0abaa0f64b85';
  const unit = 'metric';
  //request from our Server to external server 'API'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
  https.get(url, function(response){

    //response from external Server to our server
    response.on('data', function(data){

      console.log(data);
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      console.log(weatherData + temp + weatherDescription + icon + iconUrl);

      //response from our server to client server
      res.write(`<p>The weather description is ${weatherDescription}</p>`)
      res.write(`<h1>The Tempereture in ${query} is ${temp} in Celcuis Degrees. </h1>`)
      res.write(`<img src="${iconUrl}" />`)
      res.send()
    })
  })

})

app.listen(3000, function(){
  console.log('Running server on port 3000.');
})
