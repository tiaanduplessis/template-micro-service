/* eslint-env jest */
'use strict'

const micro = require('micro')
const fetch = require('node-fetch')
const listen = require('test-listen')
const app = require('./')

test('echo back the text', async () => {
  const service = micro(app)
  const url = await listen(service)

  const res = await fetch(url, {
    method: 'post',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({text: 'Hello!'})
  })

  const json = await res.json()

  await expect(json.text).toBe('Hello!')
})
