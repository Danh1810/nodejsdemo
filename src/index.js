const express = require('express')
const app = express()
const webroute=require('./routes/web')
const viewengine = require('./config/viewengine')
require('dotenv').config()

app.use(express.json());
 app.use(express.urlencoded({extended : true}))
console.log(process.env) 
const port =process.env.PORT;
viewengine(app);

app.use(webroute);


// connection.query('select *from Users u;', function (error, results, fields) {
//    console.log(results);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})