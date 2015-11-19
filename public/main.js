$(function() {

//3. connect to socket
var socket = io();

//5. submit form to send a message
$('#send-msg').on('submit', function (e) {
	event.preventDefault();

	//a. get new message from form input
	var newMsg = $('#new-msg').val();

	//b. send new message to socket (server)
	/*The socket.emit() action on the client sends the message to the server. What you want to happen next is the server should 
	receive the message and broadcast it out to all connected clients. Update your io.on('connection') event in server.js to receive 
	and broadcast messages*/
	socket.emit('chat message', newMsg);
});
//7. recieve messages from socket (server)
socket.on('chat message', function (msg) {
	$('#messages').append($('<li>' + msg + '</li>'));
});



}); /*closing loading brace*/