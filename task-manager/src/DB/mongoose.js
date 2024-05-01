const mongoose = require('mongoose');
// const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/task-manager-api');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;
  
  const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
  });

//   console.log(Schema, 'Schemaa');
//   console.log(ObjectId, 'Objectid');

  const schema = new Schema({
    name: {
      type: String,
      required: true
    }
  });
  const Cat = mongoose.model('Cat', schema);
  
  // This cat has no name :(
  const cat = new Cat();
  
  let error;
  try {
     cat.save();
  } catch (err) {
    error = err;
  }


// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// });

// const User = mongoose.model('User', {
//     name: {
//         type: String,
        
//     },
//     age: {
//         type: Number,
//     }
// })

// const myDetails = new User({
//     name: "Sahil Saini",
//     age: 26
// });

// // const MyModel = conn.model('ModelName', Schema);
// const m = new User();
// const instance = new User();
// // instance.my.key = 'hello';
//  instance.save();

// m.save(); // works
// myDetails.save().then(() => {
// console.log(myDetails, 'DETAILSSS');
// }).catch((error) => {
//     console.log('Error')
// });