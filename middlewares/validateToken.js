const passport = require('passport');

async function validateToken(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    try {
      console.log(err);
      if (err) {
        throw new Error(err);
      }
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    } catch (err) {
      next(err);
    }
  })(req, res, next);
}

module.exports = validateToken;
