import User from '../models/user.model.js'

class UserService {
  async getUser(id) {
    const user = await User.findById(id)
    if (!user) return null

    const json = user.toJSON()
    delete json.password

    return json
  }
  async getUsers() {
    const users = await User.find()
    if (!users) return null

    // const json = users.toJSON()
    // delete json.password
    // return json
    const json = users.map((u) => {
      const j = u.toJSON()
      delete j.password
      return j
    })
    return json
  }
  async updateUser(id, data) {
    const updateUser = await findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    )
    return updateUser.toJSON()
  }
  async deleteUser(id) {
    await User.findByIdAndDelete(id)
  }
}

const usersService = new UserService()

export default usersService
