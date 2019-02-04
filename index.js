require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')



app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/Luxury-Cars')

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))
