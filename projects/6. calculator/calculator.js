const express = require('express');
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({extended : true}))

app.listen(3000, function(){
  console.log("App is listen to port 3000");
})
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res){
  console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The Result is:" + result)
})


app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname + '/bmiCalculator.html')
})
app.post('/bmicalculator', function(req, res){
  var weight = req.body.weight;
  var height = req.body.height;
  var bmi = weight / Math.round(Math.pow(height, 2))

  res.send("Your BMI is "+bmi)
})
