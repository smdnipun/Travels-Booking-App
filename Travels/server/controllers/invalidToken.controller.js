import InvalidTokenSchema from '../models/invalidToken.model.js'
import invalidTokenService from '../services/invalidtoken.service.js'

//user token Api
export const TokenApi = () => {
  //inserting invalid token
  const createInvalidToken = async (req, res, next) => {
    try {
      const savedLink = await invalidTokenService.insertInvalidToken(req.body)
      res.status(200).json(savedLink)
    } catch (err) {
      next(err)
    }
  }

  return { add: createInvalidToken }
}
