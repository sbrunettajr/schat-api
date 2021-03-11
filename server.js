const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

io.on('connection', (socket) => {

    console.log('New connection')

    // socket.on('send-message', (data) => {
    //     socket.broadcast.emit('new-message', {
    //         data
    //     });
    // });

})

app.use((req, res, next) => {
    res.io = io
    next()
})

app.use('/', require('./src/routes'))






http.listen(process.env.PORT, () => {
    console.log(`[schat-api] Server running on port ${process.env.PORT}`);
})