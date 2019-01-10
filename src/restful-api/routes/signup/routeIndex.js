import express from 'express'
import { signup } from './models'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Please Post username, email and password')
})

router.post('/', async (req, res) => {
  const { username, password, email } = req.body
  const signuped = await signup({ username, password, email })
  if (signuped) {
    const responseUser = {
      id: signuped.id,
      username: signuped.username
    }
    return res.send({
      success: true,
      user: responseUser
    })
  }
  res.status(406).send({ success: false, user: null })
})


module.exports = router