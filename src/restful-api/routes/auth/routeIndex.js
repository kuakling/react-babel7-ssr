import express from 'express'
import jwt from 'jsonwebtoken'
import config from '../../../shared/core/config'
import { authentication, getUsers } from './models'
const router = express.Router()

const defaultPassword = '123456'
router.get('/', (req, res) => {
  res.send('Please Post username and password')
})

router.get('/test-auth', (req, res) => {
  const success = !!req.headers.authorization
  if(!success) res.status(405)
  res.send({ success })
})

router.get('/show-users', async (req, res) => {
  const users = await getUsers()
  const response = users.map(u => ({
    id: u.id,
    username: u.username,
    email: u.email,
    defaultPassword
  }))
  res.send(response)
})

router.post('/', async (req, res) => {
  const { username, password } = req.body
  const authenticated = await authentication({ username, password })
  if (authenticated) {
    const responseUser = {
      id: authenticated.id,
      username: authenticated.username
    }
    return res.send({
      success: true,
      token: jwt.sign(responseUser, config.jwt.secretKey),
      user: responseUser
    })
  }
  res.status(401).send({ success: false, token: null, user: null })
})


module.exports = router