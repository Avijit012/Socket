//Location Track

const express = require('express');
const app = express();
const http = require('http').Server(app);
io = require('socket.io')(http,{
  cors: {
      origin: '*',
    }
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('updateLocation', (location) => {
    console.log('Location:', location);
    // Handle the received location data here, e.g., store it in a database
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
const port = 3000; // Choose a port number of your choice
http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
