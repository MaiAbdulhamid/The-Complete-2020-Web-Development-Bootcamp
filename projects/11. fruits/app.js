const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fruitsDB', {
  useNewUrlParser: true
});

const fruitsSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true
  },
  color: String,
  rating: {
    type: Number,
    min: 0,
    max: 5
  }
})

const Fruit = mongoose.model('Fruit', fruitsSchema)
//Add new database Record
// const apple = new Fruit({
//   name: "Apple",
//   color: "Red",
//   rating: 3
// })
// const kiwi = new Fruit({
//   name: "Kiwi",
//   color: "Green",
//   rating: 1
// })
// const banana = new Fruit({
//   name: "Banana",
//   color: "yellow",
//   rating: 2
// })
const peaches = new Fruit({
  name: "Peaches",
  color: "red",
  rating: 5
})

const pineapple = new Fruit({
  name: "Pineapple",
  color: "light green",
  rating: 4
})

//queing
Fruit.find(function(error, fruits){
  if(error){
    console.log(error);
  }else{
    fruits.forEach(fruit => {
      console.log(fruit.name);
      mongoose.connection.close() // To close connection without have to press ctrl + c
    })
  }
})
//Update
// Fruit.updateOne({_id: "5fa0397233b60415cc755db4"}, {name: 'Watermelon'}, function(error, res){
//   if(error){
//     console.log(error);
//   }else{
//     console.log("Successfully Updated");
//   }
// })
// Fruit.deleteOne({_id: "5fa05cfa7cc59f34408b9bb0"}, function(error){
//   if(error){
//     console.log(error);
//   }else{
//     console.log("Successfully Deleted");
//   }
// })

// Fruit.insertMany([apple, kiwi, banana], function(error){
//     if(error){
//       console.log(error);
//     }else{
//       console.log("Successfully added to DB");
//     }
// })
//peaches.save()

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favFruits: fruitsSchema
})

const Peaple = mongoose.model('People', peopleSchema)

const person = new Peaple({
  name: "Mai",
  age: 25
})
Peaple.updateOne({_id: "5fa076f2dc415c35f49a69b7"}, {favFruits: peaches}, function(error){
  if(error){
    console.log(error);
  }else{
    console.log("Updated Successfully");
  }
})
const person1 = new Peaple({
  name: "John",
  age: 30,
  favFruits: pineapple
})
// Peaple.deleteMany({name: "Mai"}, function(error){
//   if(error){
//     console.log(error);
//   }else{
//     console.log("Successfully Deleted");
//   }
// })
person1.save()
