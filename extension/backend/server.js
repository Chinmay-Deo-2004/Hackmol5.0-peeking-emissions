const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/data")

app.listen(8080, () => {
    console.log("Server is running")
})

app.use('/', fetchRouter);