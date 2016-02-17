var express = require('express');
var app = express();
app.set('view engine','ejs');

app.get('/',function(req,res){
res.render('default',{title: 'Home', classname: 'home',users : ['Ani','Suni','Suma']
});
});
app.get('/about',function(req,res){
res.render('default',{title: 'About us',classname: 'about'
});
});

app.get('*',function(req,res){
res.send('Bad route');
});
var server = app.listen(3000,function(){
	console.log('server listening on port 3000');
});