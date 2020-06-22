const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;
// const INDEX = '/index.html';
const { addUserWatching, getWatchingViewer, removeUserWatching } = require("./socket.js");
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  io.on('connection', (socket) => {
    socket.on("watch", (videoId) => {
      socket.join(videoId); // join room by videoId
      
      addUserWatching(socket.id, videoId); // add user info to room
      
      io.to(videoId).emit("views", getWatchingViewer(videoId));
  
      socket.on("disconnect", () => {
        removeUserWatching(socket.id);
        io.to(videoId).emit("views", getWatchingViewer(videoId));
      });
    });
  });
});
