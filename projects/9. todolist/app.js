

const express    = require('express')
const bodyParser = require('body-parser')
const date       = require(__dirname + '/date.js')
const _          = require('lodash')

const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'))
/*
Database server admin username

username
password
*/
//connect To mongodb
const mongoose   = require('mongoose')
const dbUrl = 'mongodb+srv://<username>:<password>@cluster0.gfufl.mongodb.net/todolistDB'
mongoose.connect(dbUrl, {useNewUrlParser: true})
//Item Schema
const itemsSchema   = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
})
const Item = mongoose.model('Item', itemsSchema);

//Add defaultItems Items to mongodb
const item1 = new Item({
  content: 'Studying'
})
const item2 = new Item({
  content: 'Reading'
})
const item3 = new Item({
  content: 'Practise'
})
const defaultItems = [item1, item2, item3]
//List Schema
const listSchema = new mongoose.Schema({
  name: String,
  item: [itemsSchema]
})

const List = mongoose.model('List', listSchema);

//Home page Directory
app.get('/', function(req, res) {
  let day = date.getDay();
  //loop through DB Collections and print the values
  Item.find({}, function(error, foundItems){
    //Insert Items if there is no items
    if(foundItems.length === 0){
      Item.insertMany(defaultItems, function(error){
        if(error){
          console.log(error);
        }else{
          console.log("Successfully Added to DB.");
        }
      })//Insert End
      res.redirect('/')
    }else{
      //Render items To route
      res.render('list', {
        listTitle: day,
        newItems: foundItems
      })
    }
  })//Find End
});//Route End

app.post('/', function(req, res){
  console.log(req.body);
  const content = req.body.item;
  const listName = req.body.list;
  const newItem = new Item({
    content: content
  })
  if(listName === date.getDay()){
    newItem.save()
    res.redirect('/')
  }else{
    List.findOne({name: listName}, function(error, foundList){
      foundList.item.push(newItem);
      foundList.save()
      res.redirect('/' + listName)
    })
  }

})

//Delete Checked item
app.post('/delete', function(req, res){
  const itemCheckedId = req.body.checkbox;
  const listName = req.body.listName;
  if(listName === date.getDay()){
    Item.findByIdAndRemove(itemCheckedId, function(error){
      if(!error){
        console.log("Item is Successfully Deleted.");
      }
      res.redirect('/');
    })
  }else{
    List.findOneAndUpdate({name: listName}, {$pull: {item: {_id: itemCheckedId }}}, function(error, foundList){
      if(!error){
        res.redirect('/' + listName);
      }
    })
  }

})

//Make dynamic routes
app.get('/:customListName', function(req, res){
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({name: customListName}, function(error, foundList){

    if(!error){
      if(!foundList){
        const list = new List({
          name: customListName,
          item: defaultItems
        })
        list.save()
        res.redirect('/' + customListName)
      }else {
        res.render('list', {
          listTitle: foundList.name,
          newItems: foundList.item
        })
      }//End else
    }//End if

  })//End findOne

})//End dynamic Route

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(req, res) {
  console.log("Herocu server has started.");
})
