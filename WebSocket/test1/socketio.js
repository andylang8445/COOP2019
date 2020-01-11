var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(data);
    });
}).listen(8080, function () {
    console.log('Server on!');
});

var io = socketio.listen(server);
io.on('connection', function (socket) {
    socket.on('sNum', function (data) {
        console.log('Input detected');
        var result = (data.num1) * (data.num2);
        io.sockets.emit('getResult', result);
    });
});