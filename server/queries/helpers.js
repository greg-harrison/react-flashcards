const bcrypt = require('bcryptjs')

exports.comparePass = (userPass, dbPass) => {
  return bcrypt.compareSync(userPass, dbPass)
}

exports.createUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

exports.loginRequired = (req, res, next) => {
  if (!req.params.user_id) {
    return res.status(401).json({ status: 'Please log in' })
  }
  return next()
}
