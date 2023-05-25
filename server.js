const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config')
const serverConfig = require('./configs/server.config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())


//Establish DB connection
mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection
db.on("error", () => {
    console.log("Error while connecting to DB")
})
db.once("open", () => {
    console.log("Connected to mongo DB")
})

//Add routes
require('./routes/ticketNotification.route')(app)

app.listen(serverConfig.PORT, () => {
    console.log("Application listening to requests on port number " + serverConfig.PORT)
})