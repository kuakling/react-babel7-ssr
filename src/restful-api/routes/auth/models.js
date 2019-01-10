
import models from '../../db/mysql/models'
import { verifyPassword } from '../../../shared/core/hash'

export const getUserByUsername = async (username) => {
  const user = await models.user.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { username: username },
        { email: username }
      ],
    }
  })

  return user
}


export const authentication = async (args) => {
  const user = await getUserByUsername(args.username)
  if(!user) {
    return null
  }

  const validPassword = verifyPassword(args.password, user.password)
  if (!validPassword) {
    return null
  }

  return user
}

export const getUsers = async () => {
  return await models.user.findAll()
}