var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:9090
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/arapp.html'));
});

app.get('/model.gltf', function(req, res) {
    res.sendFile(path.join(__dirname + '/model.gltf'));
});

app.get('/other/model.gltf', function(req, res) {
    res.sendFile(path.join(__dirname + '/other/model.gltf'));
});

app.get('/scene.gltf', function(req, res) {
    res.sendFile(path.join(__dirname + '/scene.gltf'));
});

app.listen(9090);