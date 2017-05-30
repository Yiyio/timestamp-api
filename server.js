var express = require('express')
var app = express()
var url = require('url')

console.log('Here we gooooooo!!')


var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


app.get('/:url', function(req,res){
     console.log(req.url.substr(1))

     myUrl = req.url

     if(myUrl.indexOf("%") != -1){

       myUrl = myUrl.split("%20")
       var date = new Date(myUrl)
      var dateResponse = {unix: date.getTime(), natural: monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}

     } else {


     var date = new Date(Number(req.url.substr(1)))
     console.log(date)

     if (date.getTime() > 0){
         var dateResponse = {unix: date.getTime(), natural: monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}
     }
   }

     res.end(JSON.stringify(dateResponse))
})


app.listen(process.argv.PORT || 3000)
