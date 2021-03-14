const passport = require("passport")
const googleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require("mongoose")
const keys = require("../config/keys")

//
const User = mongoose.model("users")


passport.serializeUser((user, done) => {
  console.log(user.id)
  done(null, user.id)
  //  onmouseleave.log(user.id);
})
// //
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})


//
//google
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((existingUser) => {

            if(existingUser){
              // we already have a record with the given profile ID
              done(null, existingUser)
            }else {
              // we create a new user
              new User({ 
                    googleId: profile.id,
                    username: profile._json.name,
                    email: profile._json.email,
                    picture: profile._json.picture,
                    locale: profile._json.locale,
                    verified: profile._json.email_verified
                }).save().then(user => {
                done(null, user)
              })
            }

        })

    })
  )
