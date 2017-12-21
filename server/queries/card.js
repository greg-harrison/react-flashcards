const db = require('../db')
const pgp = db.$config.pgp;
const helpers = require('./helpers')
const _ = require('lodash')

exports.createCard = function (req, res, next) {
  // Card:
  // Front
  // Back
  // UserId
  // Card_id
  // Stack_Id

  let body = req.body

  if (req.body.stackId) {
    body.stackId = req.body.stackId
  } else {
    body.stackId = helpers.createUUID()
  }

  if (req.body.cardId) {
    body.cardId = req.body.cardId
  } else {
    body.cardId = helpers.createUUID()
  }

  db.none('insert into public.card(front,back,user_id_created,card_id,stack_id)' +
    'values(${front},${back},${userId},${cardId},${stackId})',
    body)
    .then(function (data) {
      res.status(200)
        .json({
          token: jwt.sign(
            {
              front: body.front,
              back: body.back,
              cardId: body.cardId,
              stackId: body.stackId,
              userId: body.userId
            },
            process.env.R_FLASHCARD_BCRYPT_SECRET
          ),
          user: body
        })
      return res.json(data)
    })
    .catch(function (err) {
      return next(err)
    })
}
