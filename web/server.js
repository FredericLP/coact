console.log("démarrage du serveur web");
var port="7777";

var express = require('express');
var server = express();
var app = express.Router();
server.set('view engine', 'jade');
server.set('views', './views')

var logs_activated = true;

app.use(function(req, res, next) {
  if(logs_activated = true){
    console.log('%s %s', req.method, req.url);
  }
  next();
});


process.on('uncaughtException', function (err) {
    console.log(err);
});

app.get('/', function (request, response){
  response.render('homepage', {});
});


app.get('/contact-us', function (request, response){
   response.render('fundsheet', {});
});

app.get('/css/:file', function (request, response){
  response.sendFile(request.params.file, { root: './css'});
});
app.get('/img/:file', function (request, response){
  response.sendFile(request.params.file, { root: './img'});
});

server.use('', app);
server.listen(port);
console.log("serveur ecoute sur le port " + port);
