const path = require('path')
const express = require('express')
const app = express()
const socketio = require('socket.io')

// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen
const server = app.listen(1337, () => {
  console.log(`Listening on http://localhost:${server.address().port}`)
})

const io =  socketio(server)

app.use(express.static(path.join(__dirname, 'public')))
