require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./config/routes')

mongoose.connect(process.env.MONGODB_URI)

app.use(express.static(`${__dirname}/dist`))
app.use(bodyParser.json())

app.use('/api', routes)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
//
app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))
