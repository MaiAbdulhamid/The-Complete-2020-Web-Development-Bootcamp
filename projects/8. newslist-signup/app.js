const express = require('express');
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')

const app = express()

app.use(bodyParser.urlencoded({ extended : true }))
app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/signup.html')
});

app.post('/', function(req, res){

  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;

  const data = {
    members : [
      {
        //the value is from the form
        email_address : email,
        status: "subscribed",
        merge_fields: {
                FNAME: fName,
                LNAME: lName
        }
      }
    ]
  }
  const jsonData = JSON.stringify(data);

  const listId   = "listId"
  const url      = `https://us2.api.mailchimp.com/3.0/lists/${listId}`
  const options  = {
    method: 'POST',
    auth: 'anyString:APIKey'
  }
  const request = https.request(url, options, function(response){

    if(response.statusCode === 200){
      res.sendFile(__dirname + '/success.html')
    }else{
      res.sendFile(__dirname + '/failure.html')
    }

  }); //data recieved from external API

  //data entered an external API
  request.write(jsonData)
  request.end()
});

app.post('/failure', function(req, res){
  res.redirect('/')
})


app.listen(process.env.PORT || 3000, function(req, res){
  console.log('Running at 3000 server.');
})
