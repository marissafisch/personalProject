require('dotenv').config()

const express = require('express')
, bodyParser = require('body-parser')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, session = require('express-session')

const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

//MIDDLEWARE//
app.use(passport.initialize());
app.use(passport.session()); 

//DATABASE//
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
    
})

//AUTHENTICATION//
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK

}, function(accessToken, refreshToken, extraParams, profile, done) {

      const db = app.get('db')

      db.find_user([ profile.identities[0].user_id ])
      .then( user => {
       if ( user[0] ) {
         return done( null, user );
          
       } else {    
         db.create_user([profile.displayName, profile.emails[0].value, profile.identities[0].user_id])
         .then( user => {
            return done( null, user[0] ); 
         })
       }
      })
}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/#/home',
  failureRedirect: 'http://localhost:3000/#/'
}))

//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function(user, done) {
  console.log(user)
  
  done(null, user);
}); 

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function(user, done) {
  console.log(user)//PUTS ON req.user
 
  app.get('db').find_session_user([user[0].id])
  .then( user => {
    return done(null, user[0]);
  })
});

//Logout//
app.post('/api/auth/logout', (req, res) => {
   req.logout() //PASSPORT GIVES US THIS TO TERMINATE A LOGIN SESSION
   return res.redirect(302, 'http://localhost:3000/#/'); //res.redirect comes from express to redirect user to the given url
     //302 is the status code for redirect
});


let PORT = 3030;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})   