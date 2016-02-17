
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
var port = process.env.PORT || 8080;



app.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  var nam = req.param('nam');
  var cls = req.param('cls');  

  res.send(user_id + ' ' + nam + ' ' + cls);
});


  app.get('/api/:version', function(req, res) {
    res.send(req.params.version);
  });
  
  
  
app.param('name', function(req, res, next, name) {

    
    var modified = name + ' '+'Xaviour';

      req.name = modified;

    next();
});

app.get('/api/users/:name', function(req, res) {
    // the user was found and is available in req.user
    res.send('How are you' + req.name + '!');
});


// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var nam = req.body.nam;
    var cls = req.body.cls;

    res.send(user_id + ' ' + nam + ' ' + cls);
});


// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);