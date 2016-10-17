var express = require('express'),
path=require('path'),
http=require('http');
var route=require('./routes/routes');
var app = express();


 var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: false
})); 
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/" + "log.html");

});

app.post('/login', route.login);
// app.get('/member',route.member);


app.listen(8089);
console.log('Listening on port 8089');
