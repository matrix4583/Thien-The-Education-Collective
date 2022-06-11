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


 userTable=mongoose.model('addPost',postSchema);

module.exports=
{
     createData:function(inputData, callback)
     {
                  
        userData= new userTable(inputData);
        userData.save(function(err, data)
        {
          if (err) throw err;
           return callback(data);
        });
     }
}
