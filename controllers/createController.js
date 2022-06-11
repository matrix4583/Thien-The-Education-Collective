const insertModel = require('../models/insert-Model')


// module.exports = 
// {
//     createController
// }


// function createController(req, res, next)
// {
//     const insertPost2 = new addPost({
//           name: 'Thien',
//           title: 'test',
//           description: 'test description',
//           author: 'author4'
//         })

//   insertPost2.save();

//   res.render('SuccessPost')
// }

module.exports= {
    userForm:function(req,res)
    {
         res.render('userForm')
    },
    createData:function(req, res)
    {
         var inputData= req.body;
     
         insertModel.createData(inputData, function(data)
         {
            res.redirect('/SuccessPost3');
            console.log(" record was created");


         });
    }


}