var express = require('express');
var mongoose = require('mongoose');
var bouncy = require('bouncy');
var http = require('http');

// model definitions
require('require-dir')('./models');

// route definitions
var home = require('./routes/home');

var app = express();
var RedisStore = require('connect-redis')(express);
mongoose.connect('mongodb://localhost/name-of-database');

// configure express
require('./config').initialize(app, RedisStore);

// routes
app.get('/', home.index);

// start server & socket.io
var common = require('./sockets/common');
// var server = require('http').createServer(app);
// var io = require('socket.io').listen(server, {log: true, 'log level': 2});

bouncy(function (req, res, bounce) {
    if (req.headers.host === 'robot') {
        bounce(8001);
    }
    else {
        res.statusCode = 404;
        res.end('not found\n');
    }
}).listen(8000);
http.createServer(function (req, res) {
    res.end('beep boop\n');
}).listen(8001);
// io.of('/app').on('connection', common.connection);
