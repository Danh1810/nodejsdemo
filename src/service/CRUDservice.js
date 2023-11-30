const connection = require("../config/database");

const getallUSer =  async () => {
   let [results,fields]  = await  connection.query('SELECT * FROM Users');
      
   
   return results;       
};
const getByID = async ( UserID) => {

   let[results ,fields]  =  await connection.query('select * from Users where id = ?',[UserID]);
   let user = results && results.length >0 ? results[0] :{};

   return user;
}
const UpdateUSer = async (name,email,city ,UserID) =>{
   let[results,fields]  =  await connection.query('UPDATE Users SET name = ? ,email = ?, city = ? Where id = ?',[name,email,city,UserID]);

}
const DeleteidUSer = async (UserID) =>{
   let[results,fields]  =  await connection.query('Delete From  Users where id =?',[UserID]);
   
}

module.exports = {
   getallUSer,getByID,UpdateUSer,DeleteidUSer
};
