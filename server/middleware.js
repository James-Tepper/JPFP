const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const morgan = require('morgan')
const app = express()


// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

// api routes for GET, POST, PUT, DELETE
app.use('/api', require('./api'))

// logging middleware
app.use(cors())
app.use(morgan('dev'))
// app.use(volleyball)

// api routes
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

