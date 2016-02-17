var express = require('express');
var app = express();
app.set('view engine','ejs');

app.get('/',function(req,res){
res.render('default',{title: 'Home',users : ['Ani','Suni','Suma']
});
});
app.get('/me',function(req,res){
res.send('@planetof the web');
});
app.get('/who/:name?',function(req,res){
	var name = req.params.name;
	res.send(name+' '+'was here');
});
app.get('/who/:name?/:title?',function(req,res){
	var name = req.params.name;
	var title = req.params.title;
res.send('<p>Name:'+name+'<br>title:'+title);
});
app.get('*',function(req,res){
res.send('Bad route');
});
var server = app.listen(3000,function(){
	console.log('server listening on port 3000');
});