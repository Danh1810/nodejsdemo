const express =require('express')
const {gethome,getok} = require('../controllers/homeComtroller')
const route =express.Router();

route.get('/home',gethome);
route.get('/', getok);

module.exports = route;