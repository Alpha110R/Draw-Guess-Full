const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const socketio = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

const players = { 'player1': null, 'player2': null }
let player = 'player1'
let highestScore = 0;
let sessionScore = 0;

function reset() {
    imageCanvas = "";
    players['player1'] = null
    players['player2'] = null
    player = 'player1'
}


io.on("connection", (socket) => {
    if (players['player1'] === null) {
        players['player1'] = socket
        socket.emit('myRole', 'player1')
    } else if (players['player2'] === null) {
        players['player2'] = socket
        socket.emit('myRole', 'player2')
        io.emit('turn', 'player1')
    } else {
        socket.disconnect()
    }

    socket.on('send_message', (message) => {
        socket.broadcast.emit('message', message);
    });

    socket.on('send_wordToGuess', (wordToGuess) => {
        socket.broadcast.emit('wordToGuess', wordToGuess);
    });

    socket.on('send_victory', (victory) => {
        socket.broadcast.emit('victory', victory);
    });

    socket.on('send_score', (score) => {
        sessionScore += score;
    })

    socket.on('end_game', () => {
        socket.broadcast.emit('end_session', 1);
        if (highestScore < sessionScore)
            highestScore = sessionScore;
        sessionScore = 0;
    })

    io.emit('highestScore', highestScore);
    socket.on('disconnect', () => {
        if (players['player1'] === socket) {
            players['player1'] = null
        } else if (players['player2'] === socket) {
            players['player2'] = null
        }
        io.emit('turn', 'final')
    })

})

reset();

server.listen(4000, () => {
    console.log("SERVER RUNNING");
});


