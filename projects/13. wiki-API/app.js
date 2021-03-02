const express    = require('express');
const ejs        = require('ejs');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

const app        = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

//Connect to mongoose db
mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
})

const Article = mongoose.model('Article', articleSchema)


//TODO
app.get('/', function(req, res){
  res.render('index')
})


//Chaining all Requests

app.route('/articles')

.get(function(req, res){
  Article.find({}, function(error, foundArticles){
    if(error){
      res.send(error);
    }else{
      res.send(foundArticles);
    }
  });
})
.post(function(req, res){
  const article = new Article({
    title: req.body.title,
    content: req.body.content
  })

  article.save(function(error){
    if(error){
      res.send(error)
    }else{
      res.send("Successfully added.")
    }
  });
})
.delete(function(req, res){
  Article.deleteMany(function(error){
    if(!error){
      res.send("Successfully Deleted")
    }
  });
})
////////// Spicific article
app.route('/articles/:articleTitle')
.get( function(req, res){
  const articleTitle = req.params.articleTitle
  Article.findOne({title: articleTitle}, function(error, foundArticle){
    if(foundArticle){
      res.send(foundArticle)
    }else{
      res.send("No Mathed article!")
    }
  });
})
.put(function(req, res){
  Article.update(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(error){
      if(!error){
        res.send()
      }
    }
  )
})
.patch(function(req, res){
  Article.update(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(error){
      res.send(error || 'Successfully Updates.')
    }
  )
})
.delete(function(req, res){
  Article.deleteOne({title: req.params.articleTitle}, function(error){
    res.send(error || 'Successfully Deleted Corresponding article.')
  })
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
/*















*/
