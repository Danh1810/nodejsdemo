const express = require ('express')
// const app = express()
// app.use(express.json)
// app.use(express.urlencoded({extended : true}))
const {gethome, getok ,getuser,getlist,getEdit,PostEdit,Postdelete,ConfirmDelete} = require('../controllers/homeController')
const route =express.Router();

route.get('/home',gethome);
route.get('/', getok);
route .post('/create',getuser )
/route.get('/list',getlist)
route.get ('/edit/:id',getEdit)
route.post('/update',PostEdit)
route.post('/delete/:id',Postdelete)
route.post('/delete',ConfirmDelete)
module.exports = route;