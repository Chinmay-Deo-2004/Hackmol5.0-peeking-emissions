const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./nodeapp/models/fetch-model')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/data")

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json)
})

app.listen(5005, () => {
    console.log("Server is running")
})

var fetchRouter = require('./nodeapp/routes/routes');
app.use('/', fetchRouter);