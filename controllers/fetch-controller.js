const fetchModel = require('../models/fetch-Model')


module.exports={
 
    fetchData:function(req, res){
      
      fetchModel.fetchData(function(data){
          res.render('index2',{userData:data});
      })
    }
}