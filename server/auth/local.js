const LocalStrat = require('passport-local').Strategy
const authHelpers = require('../queries/helpers')

const db = require('../db')

const options = {}

module.exports = new LocalStrat(options, (email, password, done) => {
  //Check the DB for the user's email -- This is what we'll use in place of a username
  console.log('email', email);
  // db.one will reject if there are more than on entry, making it perfect for this
  db.one('select * from public.user where email = $1', email)
    .then((user) => {
      if (!user) return done(null, false)
      if (!authHelpers.comparePass(password, user.password)) {
        return done(null, false)
      } else {
        return done(null, user)
      }
    })
    .catch((err) => { return done(err) })

})
