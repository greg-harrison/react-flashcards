const db = require('../db')
const local = require('./local')
const pgp = db.$config.pgp

module.exports = (passport) => {
  //For whatever reason, Passport isn't storing the USER ID in the session
  passport.serializeUser((user, done) => {
    console.log('user', user);
    done(null, user.user_id)
  })

  passport.deserializeUser((id, done) => {
    // Looks like this may need to be stored in a Mongo collection to maintain state, we'll need to do more research though :/
    console.log('deserialize');
    console.log('id', id);
    db.one('select * from public.user where user_id = $1', id)
      .then(function (user) {
        console.log('user', user);
        done(null, user)
      })
      .catch((err) => { done(err, null) })
  })

  passport.use(local)
}
