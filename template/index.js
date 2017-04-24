'use strict'

const { json } = require('micro')

module.exports = async req => {
  const body = await json(req)
  return { text: body.text }
}
