var express = require('express')
var app = express()
var url = require('url')

console.log('Here we gooooooo!!')


var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


app.get('/:url', function(req,res){


     queryString = req.url.substr(1)
     console.log(queryString)
     var dateResponse = {}

     if(queryString.indexOf("%") != -1){

       queryString = queryString.split("%20")
       var date = new Date(queryString)
       dateResponse.unix = date.getTime()
       dateResponse.natural = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()

     } else if (new Date(Number(queryString)) == "Invalid Date"){

        dateResponse.unix = null;
        dateResponse.natural = null;

     } else {


     var date = new Date(Number(queryString))
       dateResponse.unix = date.getTime()
       dateResponse.natural = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
     }

     res.end(JSON.stringify(dateResponse))
})


app.listen(process.env.PORT || 3000)
