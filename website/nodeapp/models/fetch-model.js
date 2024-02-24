var mongoose=require('mongoose');
var db = require('../database');
// create an schema
var userSchema = new mongoose.Schema({
            domain: String,
            footprint: Number,
            green: Boolean
        });
userTable=mongoose.model('database',userSchema);
        
module.exports={
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     }
}

//fetch all
