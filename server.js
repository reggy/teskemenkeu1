// var express = require('express')
// 	,http = require('http')
// 	,fs = require('fs');

// var app = express();	
/*
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-type' : 'text/plain'
	});
	res.end('hello world ')
	// console.log("server running on port : 5000");
}).listen(5000,"127.0.0.1");
*/
var express = require('express')
	,http = require('http')
	,fs = require('fs');

var app = express();

app.set('port',process.env.port || 3300);
app.set('views',__dirname + '/public/templates');
app.engine('html',require('ejs').renderFile);

app.set('view engine','html');
app.get('/',function(req,res){
	res.render('index',{
		errmsg : ""
	});
});

http.createServer(app).listen(app.get('port'),'127.0.0.1',function(){
	console.log("server running on port : ",app.get('port'));
});