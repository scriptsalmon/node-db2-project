const express = require("express")

const server = express()

server.get('/', (req, res) => {
    res.json({ message: 'server is up!' })
})

module.exports = server
