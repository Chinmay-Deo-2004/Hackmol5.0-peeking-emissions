var fetchModel= require('../models/fetch-model');
module.exports={
 
    fetchData:function(req, res){
      
      fetchModel.fetchData(function(data){
          res.render('user-table',{userData:data});
      })
    }
}

module.exports={
  fetchData:function(callback){
     var userData=userTable.find({});
     userData.exec(function(err, data){
         if(err) throw err;
         return callback(data);
     })
     
  }
}