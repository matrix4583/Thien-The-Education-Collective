const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user')

const postSchema = new mongoose.Schema(
{
            title: String,
            description:String,
            youtube_URL:String,
            author:String,
  }, 
  {
    timestamps: true
  });


 userTable=mongoose.model('addPosts',postSchema);


 module.exports={
     
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     }
}