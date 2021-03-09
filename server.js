var express = require("express")
var app = express()
const PORT = 3000;
var path = require("path")
app.use(express.static(__dirname));

app.get("/", function(req, res)
{
    res.sendFile(path.join(__dirname + "/index.html"))    
})

var request = require('request');
app.get('/rate', function(req,res) {
    var newurl = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json';
    request(newurl).pipe(res);
});


app.listen(PORT, function ()
{ 
    console.log("start serwera na porcie " + PORT )
})
