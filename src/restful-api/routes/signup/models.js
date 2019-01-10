
import models from '../../db/mysql/models'
import { generatePasswordHash } from '../../../shared/core/hash'

export const signup = async (args) => {
  try {
    const signup = await models.user.create({
      username: args.username,
      password: await generatePasswordHash(args.password),
      email: args.email,
    })

    return signup
  } catch (error) {
    return null
  }
}