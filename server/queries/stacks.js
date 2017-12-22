const db = require('../db')
const pgp = db.$config.pgp;
const helpers = require('./helpers')
const _ = require('lodash')

exports.createStack = (req, res, next) => {

  let body = req.body

  body.stackId = helpers.createUUID()

  _.map(body.cards, (x, i) => {
    x.stackId = body.stackId
    x.userId = body.userId
    x.cardId = helpers.createUUID()
  })

  db.tx(t => {
    const stackCreate = db.none(
      'insert into stack(title,stack_id,user_id_created)' +
      'values(${title},${stackId},${userId})', body
    )

    const queries = [
      stackCreate
    ]

    for (let i = 0; i <= body.cards.length - 1; i++) {
      let card = body.cards[i]
      console.log('card', card);

      queries.push(
        db.any(
          'insert into card(front,back,card_id,user_id_created,stack_id)' +
          'values(${front},${back},${cardId},${userId},${stackId})', card
        )
      )
    }

    return t.batch(queries)
  })
    .then((data) => {
      res.status(200)
        .json({
          body
        })
      return res.json(data)
    })
    .catch((err) => {
      return next(err)
    })
}
