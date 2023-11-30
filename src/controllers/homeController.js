// const express = require('express')
// const app = express()

const connection = require("../config/database")
const {getallUSer,getByID,UpdateUSer,de, DeleteidUSer }= require("../service/CRUDservice")


// app.use(express.json)
// app.use(express.urlencoded({extended : true}))

const gethome = (req,res)=>{ 
    res.render('home.ejs')
}
const getok = (req, res) => {
    res.render('demo.ejs')
  }
const getuser= async (req,res)=>{

    let name =req.body.fname
    let email =req.body.email
    let city =req.body.city

     console.log (" >>>name", name,'name =' ,email ,'city =',city )
     let[results,fields]  =  await connection.query('insert into Users (name,email,city) values (?,?,?)',[name,email,city]);
      
    res.send('danh');
    
};
const getlist = async ( req,res)  => {
  let results = await getallUSer();
  return res.render('list.ejs',{ listUsers : results})
  
    
};
const getEdit = async (req, res) => {

const UserID =req.params.id

 let user = await getByID(UserID);
  res.render('edit.ejs',{userEdit : user})
}
const PostEdit= async (req,res)=>{

  let name =req.body.fname
  let email =req.body.email
  let city =req.body.city
  let id = req.body.idu

  await UpdateUSer(name,email,city,id)
  res.redirect('/list')

   
  
};
const Postdelete= async (req,res)=>{

  const userid =req.params.id;
  let user = await getByID(userid);
  res.render ('delete.ejs',{ useer :user})

};
const ConfirmDelete =async(req,res) =>{
  const id  = req.body.cid;
  await DeleteidUSer(id);
   res.redirect('/list')

}

module.exports  =  { 
    gethome ,getok,getuser,getlist,getEdit,PostEdit,Postdelete,ConfirmDelete
};