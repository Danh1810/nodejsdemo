

const gethome = (req  ,res)=>{ 
    res.send ('Hello')
}
const getok = (req, res) => {
    res.render('demo.ejs')
  }

module.exports ={ 
    gethome ,getok
}