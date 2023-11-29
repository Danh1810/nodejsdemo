const express = require('express')
const app = express()
const webroute=require('./routes/web')
const viewengine = require('./config/viewengine')
const mysql      = require('mysql');
require('dotenv').config()


console.log(process.env) 
const port =process.env.PORT;
viewengine(app);
// app.set('views', './src/views');
app.use(webroute);

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3307,
  user     : 'root',
  password : '123456',
  database : 'danh'
});

connection.query('select *from Users u;', function (error, results, fields) {
   console.log(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})