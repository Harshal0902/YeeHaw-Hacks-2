const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
var axios = require('axios');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const CHAT_BOT = 'ChatBot';
io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on('join_room', (data) => {
    const { username, room } = data;
    socket.join(room);

    let __createdtime__ = Date.now();
    socket.to(room).emit('receive_message', {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdtime__,
    });
  });
});

function addRoom(message, username, room) {
    const dbUrl = process.env.APPWRITE_ENDPOINT;
    const dbPw = process.env.APPWRITE_ENDPW;
    if (!dbUrl || !dbPw) return null;
  
    var data = JSON.stringify({
      operation: 'insert',
      schema: 'realtime_chat_app',
      table: 'messages',
      records: [
        {
          message,
          username,
          room,
        },
      ],
    });
  
    var config = {
      method: 'post',
      url: dbUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: dbPw,
      },
      data: data,
    };
  
    return new Promise((resolve, reject) => {
      axios(config)
        .then(function (response) {
          resolve(JSON.stringify(response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

server.listen(4000, () => 'Server is running on port 3000');
