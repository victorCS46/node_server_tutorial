const http = require('http')
const axios = require('axios')
const hbs = require('hbs')
const express = require('express')
const app = express()
 
app.use(express.static(`${__dirname}/public`))

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home', {
    name: 'victor'
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})
 
app.listen(3000, () => console.log('listen: http://127.0.0.1:3000'))