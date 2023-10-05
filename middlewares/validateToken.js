const passport = require('passport');

async function validateToken(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    try {
      console.log(err, user, info);
    } catch (err) {}
  })(req, res, next);
}

module.exports = validateToken;
