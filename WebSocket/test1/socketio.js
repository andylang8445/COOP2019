/*var http = require('http');
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
});*/


// Node.js WebSocket server script
const http = require('http');
const WebSocketServer = require('websocket').server;
const server = http.createServer();
server.listen(9898);
const wsServer = new WebSocketServer({
    httpServer: server
});
wsServer.on('request', function (request) {
    const connection = request.accept(null, request.origin);
    connection.on('message', function (message) {
        console.log('Received Message:', message.utf8Data);
        const recievedMsg=message.utf8Data.split(":");
        const n1 = parseInt(recievedMsg[0], 10);
        const n2 = parseInt(recievedMsg[1], 10);
        const result = n1 * n2;
        console.log('n1:', n1);
        console.log('n2:', n2);
        console.log('result:', result);
        connection.sendUTF(result);
    });
    connection.on('close', function (reasonCode, description) {
        console.log('Client has disconnected.');
    });
});
