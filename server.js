//required dependencies
var express = require('express'),
	app = express(),
	//node http server
	http = require('http').Server(app),
	bodyParser = require('body-parser'),
	io = require('socket.io')(http);


//middleware
//A. configure bodyParser for recieving form data
app.use(bodyParser.urlencoded({ extended: true}));
//B. static files from public folder
app.use(express.static(__dirname + '/public'));


//Set view engine to hbs
app.set('view engine', 'hbs');

//SOCKET.IO SET-UP
//1. connect to socket...This listens for users (clients) connecting and disconnecting.
io.on('connection', function(socket){
	console.log('a user connected');

	//6. receive and broadcast chat messages
	socket.on('chat message', function (msg) {
		console.log('message', msg);
		io.emit('chat message', msg);
	});

	socket.on('disconnect', function (){
		console.log('user disconnected');
	});
});




//homepage route
app.get('/', function (req, res) {
	res.render('index');
});



//listen on port
//node http server
http.listen(3000, function() {
	console.log('im listening');
});	