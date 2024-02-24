const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fetchRouter = require('./routes/routes');

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nitjec22:nitj22ec@cluster0.3w273ju.mongodb.net/data")

app.listen(8080, () => {
    console.log("Server is running")
})

app.use('/', fetchRouter);