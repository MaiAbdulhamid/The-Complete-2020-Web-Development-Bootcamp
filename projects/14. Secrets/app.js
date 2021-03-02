require('dotenv').config()
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"));

//initailze session and passport
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize())
app.use(passport.session())

//Connect to mongoose db
mongoose.connect('mongodb://localhost:27017/usersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true)
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema)
passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    // findOrCreate not mongoose function, it's a description
    // To make findOrCreate work, we installed mongoose-findorcreate plugin
    User.findOrCreate({
      googleId: profile.id
    }, function(err, user) {
      return cb(err, user);
    });
  }
));

app.get('/', function(req, res) {
  res.render('home')
})

app.get('/submit', function(req, res){
  if(req.isAuthenticated()){
    res.render('submit')
  }else{
    res.redirect('/login')
  }
})
app.post('/submit', function(req, res){
  const submittedSecret = req.body.secret;
  console.log(req.user);
  User.findById(req.user.id, function(error, foundUser){
    if(error){
      console.log(error);
    }else{
      if(foundUser){
        foundUser.secret = submittedSecret
        foundUser.save(function(){
          res.redirect('/secrets')
        });
      }
    }
  });
});

// This directory : '/auth/google' -> For Google sign up and login buttons
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);
// This Route is Made by google after authentication process
app.get('/auth/google/secrets',
  //authenticate users locally and save them session
  passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  }
);
app.get('/login', function(req, res) {
  res.render('login')
})
app.get('/secrets', function(req, res) {

  User.find({'secret': {$ne: null}}, function(error, foundUser){
    if(error){
      console.log(error);
    }else{
      if(foundUser){
        res.render('secrets', {usersWithSecret: foundUser})
      }
    }
  })
})
app.get('/register', function(req, res) {
  res.render('register')
})
app.post('/register', function(req, res) {

  User.register({
    username: req.body.username
  }, req.body.password, function(error, user) {
    if (error) {
      console.log(error);
      res.redirect('/register')
    } else {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/secrets')
      })
    }
  })
})
app.post('/login', function(req, res) {

  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  req.login(user, function(error) {
    if (error) {
      console.log(error);
    } else {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/secrets')
      })
    }
  })
})
app.get('/logout', function(req, res) {
  req.logout()
  res.redirect('/')
})
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
