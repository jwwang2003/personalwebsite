import express from 'express'
const router = express.Router()

import resume from './getResume'
router.get('/getResume', function (req, res, next) {
  res.header('Content-Type', 'application/json')
  return res.json(
    resume
  )
})

import medium from './getMedium'
router.get('/getMedium', medium)

module.exports = router