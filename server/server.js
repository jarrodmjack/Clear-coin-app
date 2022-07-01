const express = require('express')
const app = express()
const corse = require('cors')
// const MongoClient = require('mongodb').MongoClient
// const PORT = 6000
// const router = express.Router();
require('dotenv').config()

app.set('view engine', 'ejs')
app.use(express.static('build'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
    res.json({ 'users': ['userone', 'usertwo', 'userthree'] })
})


// app.get('/portfolio')



app.listen(5000, () => {
    console.log(`Listening on port 5000`)
})


