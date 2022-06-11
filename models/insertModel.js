const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
{
    ID: Number,
    title: String,
    description: String,
    author: String,
    review: {type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}
  }, 
  {
    timestamps: true
  });


 userTable=mongoose.model('addUser',postSchema);

module.exports={
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