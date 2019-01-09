import express from 'express'
import users from './users.json'
import jwt from 'jsonwebtoken'
import config from '../../../shared/core/config'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Please Post username and password <br><pre>' + JSON.stringify(users, null, 2)+'</pre>')
})

router.get('/show-users', (req, res) => {
  res.send(users)
})

router.post('/', (req, res) => {
  const { username, password } = req.body
  const user = users.find(o => o.username === username);
  if (user && user.password == password) {
    const responseUser = {
      id: user.id,
      username: user.username
    }
    return res.send({
      authenticated: true,
      token: jwt.sign(responseUser, config.jwt.secretKey),
      user: responseUser
    })
  }
  res.status(401).send({authenticated: false, token: null, user: null})
})


module.exports = router