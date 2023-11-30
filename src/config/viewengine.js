const path = require('path');
const express = require('express')

const  configviewEngine =(app) =>{
    app.use(express.static('./src' + '/pulic'));
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
   
}
module.exports = configviewEngine;