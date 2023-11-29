const express = require('express')
const app = express()
const port = 3000
const handlebars= require ( 'express-handlebars');

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})