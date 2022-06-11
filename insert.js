const insertPost = require('./models/postModel')

 const insertPost2 = new insertPost({
          name: 'Thien',
          title: 'test',
          description: 'test description',
          author: 'author3'
        })

  insertPost2.save();
          
       