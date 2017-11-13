require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , session = require('express-session')
    , cors = require('cors')

const app = express();

app.use( express.static( __dirname + './../build') );

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

//MIDDLEWARE//
app.use(bodyParser.json())
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
const checkLogin = (req, res, next) => {
    console.log(req.isAuthenticated())
    if (!req.isAuthenticated()) {
        next()
    } else {
        res.redirect(`${process.env.BASE_URL}/#/profile`)
    }
}

//DATABASE//
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
    db.init.seed()

   

})

//AUTHENTICATION//
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK

}, function (accessToken, refreshToken, extraParams, profile, done) {

    const db = app.get('db')

    db.find_user([profile.identities[0].user_id])
        .then(user => {
            if (user[0]) {
                return done(null, user[0]);

            } else {
                db.create_user([profile.displayName, profile.emails[0].value, profile.identities[0].user_id])
                    .then(user => {
                        return done(null, user[0]);
                    })
            }
        }).catch((err) =>  {
            return done(err)
        })
}));

app.get('/auth', checkLogin, passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://party-up.devmtn-projects.com:3030/#/profile',
    failureRedirect: 'http://party-up.devmtn-projects.com:3030/#/'
}))

//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function (user, done) {


    done(null, user);
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function (user, done) {


    app.get('db').find_session_user([user.id])
        .then(user => {
            return done(null, user[0]);
        })
});

app.get('/auth/me', (req, res) => {
    console.log('checking')
    if (!req.user) {
        return res.status(404).send('User not found')
    } else {
        return res.status(200).send(req.user);
    }
})

//Logout//
 //AUTH ENDPOINT (Logout)
      app.get('/auth/logout', (req, res) => {
        req.logout() //PASSPORT TO TERMINATE LOGIN SESSION
        return res.redirect(302, 'http://party-up.devmtn-projects.com:3030/#/'); //res.redirect comes from express to redirect user to the given url
      })

//ENDPOINTS//

//Create Party//
app.post('/api/createParty', (req, res) => {
    const { partyName, partyDate, partyLocation, partyAddress, partyDescription,
        partyDecorations, partySupplies, partyFood } = req.body
       
app.get('db').createParty([partyName, partyDate, partyLocation, partyAddress, partyDescription, req.user.id]).then(party => {
        req.session.party = party
    })
    app.get('db').createTask([partyDecorations, partySupplies, partyFood]).then(tasks => {
        return res.redirect(`${process.env.BASE_URL}/#/review_event`);

    })

})
//Get All Parties//
app.get('/api/getAllParties', (req, res) => {
    app.get('db').getAllParties()
        .then(party => {
        res.status(200).send(party);
    })
})

//Get All Tasks//
app.get('/api/getAllTasks', (req, res) => {
    app.get('db').getAllTasks().then(tasks => {
        res.status(200).send(tasks);
    })
})

//Send Invite//
app.post('/api/sendInvite', (req, res) => {
    console.log('send invite: ', req.body)
    app.get('db').addEmailList([req.body.email_list, req.session.party[0].id]).then(response => {
        res.status(200).send('email list added')
    })
})
app.get('*', (req, res) => {
    res.sendFile( __dirname + './../build')

})
let PORT = 3030;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})   