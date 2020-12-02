const axios = require('axios')
const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

app.use(express.static(`${__dirname}/public`))

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home', {
    name: 'viewer'
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})
 
app.listen(port, () => console.log(`listen: http://127.0.0.1:${port}`))