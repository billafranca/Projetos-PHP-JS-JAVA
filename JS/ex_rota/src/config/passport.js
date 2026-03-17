const passport = require('passport');

const googleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new googleStrategy({
    clienteId: process.env.GOOGLE_CLIENTE_ID,
    clienteSecret:  process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:  /auth/google / callback
}))
    



