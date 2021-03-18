const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

var express = require("express");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.on("connection", (socket) => {
  socket.on("mouse", (msg) => {});

  socket.on("mouseout", (msg) => {
    socket.broadcast.emit("moueout", msg);
  });
});
