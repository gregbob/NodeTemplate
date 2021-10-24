const express = require('express')
const Example = require('./../models/example')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("Hello!")
})

router.post('/', async (req, res) => {
  example = new Example ({
    name: "Example!"
  })

  try {
    example = await example.save()
    res.send(example.id)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router