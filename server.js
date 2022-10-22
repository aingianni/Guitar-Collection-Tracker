require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3000

// Connect to db
const db = require('./models/db')
db.once('open', () => {
    console.log('Connected to mongoDB')
})

// Initialize View Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Mount middleware
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))

// Setting up localhost:3000/blogs as the entry for my routes
app.use('/blogs', require('./controllers/routeController.js'))

// Listen on PORT
app.listen(PORT, () => {
    console.log('Listening on 3000', PORT)
})