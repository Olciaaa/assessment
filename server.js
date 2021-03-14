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
var urlExists = require('url-exists');

app.get('/rate', function(req,res) {
    var newurl = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json';
    
    urlExists("http://api.nbp.pl", function(err, exists) {
        if(exists == true)
        {
            request(newurl).pipe(res);
        }
    });

    
});


app.listen(PORT, function ()
{ 
    console.log("start serwera na porcie " + PORT )
})
