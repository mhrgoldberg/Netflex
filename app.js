const express = require('express')

require('dotenv').config()

const db = require('./config/keys').mongoURI
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const morgan = require('morgan')
const path = require('path')
const users = require('./routes/api/users')
const movies = require('./routes/api/movies')
const search = require('./routes/api/search')
const listItems = require('./routes/api/listItems')

const app = express()

app.use(morgan('dev'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err))

app.use(passport.initialize())
require('./config/passport')(passport)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/search', search)
app.use('/api/users', users)
app.use('/api/movies', movies)
app.use('/api/lists', listItems)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`))
