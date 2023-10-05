const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user/user');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY,
  };

  passport.use(
    new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
      try {
        console.log(jwtPayload.id);
        const user = await User.findOne({ email: jwtPayload.id });

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        done(err, false);
      }
    })
  );
};
