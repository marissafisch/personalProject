require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , session = require('express-session')
    , cors = require('cors')

const app = express();

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
        res.redirect('http://localhost:3000/#/profile')
    }
}

//DATABASE//
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
    // app.get('db').init.seed()

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
                return done(null, user);

            } else {
                db.create_user([profile.displayName, profile.emails[0].value, profile.identities[0].user_id])
                    .then(user => {
                        return done(null, user[0]);
                    })
            }
        })
}));

app.get('/auth', checkLogin, passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/profile',
    failureRedirect: 'http://localhost:3000/#/'
}))

//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function (user, done) {


    done(null, user);
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function (user, done) {


    app.get('db').find_session_user([user[0].id])
        .then(user => {
            return done(null, user[0]);
        })
});

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        return res.status(404).send('User not found')
    } else {
        return res.status(200).send(req.user);
    }
})

//Logout//
app.post('/api/auth/logout', (req, res) => {
    req.logout() //PASSPORT GIVES US THIS TO TERMINATE A LOGIN SESSION
    return res.redirect(302, 'http://localhost:3000/#/'); //res.redirect comes from express to redirect user to the given url
    //302 is the status code for redirect
});

//ENDPOINTS//

//Create Party//
app.post('/api/createParty', (req, res) => {
    const { partyName, partyDate, partyLocation, partyAddress, partyDescription,
        partyDecorations, partySupplies, partyFood } = req.body

    app.get('db').createParty([partyName, partyDate, partyLocation, partyAddress, partyDescription, req.query.id]).then(party => {
        console.log("create party", party)
        req.session.party = party
        console.log("req.session.party", req.session.party)
    })
    app.get('db').createTask([partyDecorations, partySupplies, partyFood]).then(tasks => {
        return res.redirect('http://localhost:3000/#/review_event');

    })

})
//Get All Parties//
app.get('/api/getAllParties', (req, res) => {
    app.get('db').getAllParties().then(party => {
        res.status(200).send(party);
    })
})

app.post('/api/sendInvite', (req, res) => {
    console.log('send invite: ', req.body)
    app.get('db').addEmailList([req.body.email_list, req.session.party[0].id]).then(response => {
        res.status(200).send('email list added')
    })
    // console.log(req.user);
    // console.log('req.body', req.body)
    // const { email_list, user_Id, party_Id, guests } = req.body
    
    // app.get('db').sendInvite([email_list, req.user.id, party_Id]).then(invites => {
    //     console.log("this is the invites", invites)
    // })
    // ;
    // for (var i = 0; i < guests.length; i++) {
    //     app.get('db').addGuestToParty([guests[i], party_Id]).then(party => {
    //         console.log("add guest to party fired")
    //         console.log(party);

    //     })
        
    // }
    
    // return res.redirect('http://localhost:3000/#/profile');

})

// app.get('db').sendInvite([listOfEmails, req.user.id, party[0].id]).then(invites => {
//     res.status(200).send('added');
// })

let PORT = 3030;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})   