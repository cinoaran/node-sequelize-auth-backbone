const { serializeUser } = require('passport');
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/User')


// JWT STRATEGY
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.SECRETKEY  
},
    async(payload, done) => {
        try {
            // find User is in the token with payload.sub.userId
            const user = await User.findByPk(payload.sub.userId)

            // if no User
            if(!user) {
                return done(null, false);
            }

            // otherwise return user
            done(null, user);    

        } catch (error) {
            done(error, false);
        }
    }
));

// LOCAL STRATEGY

passport.use(new LocalStrategy({
    // Assumes username password check
    usernameField: 'userEmail',
    passwordField: 'userPassword'

}, async(userEmail, userPassword, done) => {    

    try {     
            // Find user given email
            const user = await User.findOne({where: {user_email: userEmail}});          

            // if not handle it
            if(!user){
                return done(null, false);
            }

            
            // Check pw is correct
            const passwordMatch = await user.validPassword(userPassword);
            
            // if not handle it
            if(!passwordMatch){
                return done(null, false);
            }

            // Otherwise, return the user
            done(null, user);            
        
    } catch (error) {
        done(error, false);
    } 

    

}))