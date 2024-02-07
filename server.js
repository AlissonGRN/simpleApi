const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Server config

const app = express()
const PORT = process.env.PORT || 3000

// Middleware to process Json data

app.use(bodyParser.json())

// Routes

// Server start

app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`)
})
