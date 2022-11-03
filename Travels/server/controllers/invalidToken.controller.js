import InvalidTokenSchema from '../models/invalidToken.model.js'

//user token Api 
export const TokenApi = () => {
  const createInvalidToken = async (req, res, next) => {
    const newLink = new InvalidTokenSchema(req.body)

    try {
      const savedLink = await newLink.save()
      res.status(200).json(savedLink)
    } catch (err) {
      next(err)
    }
  }

  return { add : createInvalidToken }
}

