const express = require('express')
const Example = require('./../models/example')
const router = express.Router()

router.get('/', async (req, res) => {
  const examples = await Example.find()
  res.send(examples)
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