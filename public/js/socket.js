var socket = io();
var canvas = document.querySelectorAll("canvas")[0];

socket.emit("mouse", data);
socket.emit("mouseout", data);
