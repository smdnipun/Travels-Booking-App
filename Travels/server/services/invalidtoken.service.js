import InvalidTokenSchema from '../models/invalidToken.model.js'

class InvalidToken {
  async insertInvalidToken(data) {
    const obj = new InvalidTokenSchema(data)
    const invalidToken = await obj.save()
    if (!invalidToken) return null
    return invalidToken.toJSON()
  }
}

const invalidTokenService = new InvalidToken()
export default invalidTokenService
