var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'html');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  console.log('banana');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

http.listen(app.get('port'), function(){
  console.log('listening on *:3000');
});
