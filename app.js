const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = process.env.PORT || 3000

const app = express()

app.disable('x-powered-by')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())

const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)

module.export = app
