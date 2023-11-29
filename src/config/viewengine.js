const path = require('path');
const express = require('express')

const  configviewEngine =(app) =>{
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    app.use(express.static('./src' + '/pulic'));
}
module.exports = configviewEngine;