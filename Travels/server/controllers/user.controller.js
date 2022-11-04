import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createError } from '../util/error.js'
import usersService from '../services/users.service.js'
//register user

export const AuthApi = () => {
  const register = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (user != null) {
        return res.status(200).json('Exists')
      } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
          ...req.body,
          password: hash,
        })

        await newUser.save()
        res.status(200).json('Created')
      }
    } catch (err) {
      next(err)
    }
  }

  const login = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) return next(createError(404, 'User not found!'))

      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      )
      if (!isPasswordCorrect)
        return next(createError(200, 'Wrong Password or Username'))

      const { password, ...otherDetails } = user._doc
      res.status(200).json({
        success: true,
        message: 'SignIn successfull',
        data: [{ ...otherDetails }],
      })
    } catch (err) {
      next(err)
    }
  }

  const updatePassword = async (req, res, next) => {
    try {
      const user = await User.findOne({ id: req.params.id })
      if (!user) return next(createError(200, 'User not found!'))

      const isPasswordCorrect = await bcrypt.compare(
        req.body.oldPassword,
        user.password
      )
      if (!isPasswordCorrect) return next(createError(200, 'Wrong Password'))

      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(req.body.newPassword, salt)
      const obj = {
        password: hash,
      }
      await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: obj,
        },
        {
          new: true,
        }
      )
      res.status(200).json('Password Reset')
    } catch (err) {
      next(err)
    }
  }

  return {
    register: register,
    login: login,
    updatePwd: updatePassword,
  }
}

export const UserApi = () => {
  //update
  const updateUser = async (req, res, next) => {
    try {
      const updateUser = await usersService.updateUser(id,req.body)
      res.status(200).json(updateUser)
    } catch (err) {
      next(err)
    }
  }

  //delete
  const deleteUser = async (req, res, next) => {
    try {
      await usersService.deleteUser(req.params.id)
      res.status(200).json('User has been deleted')
    } catch (err) {
      next(err)
    }
  }

  //get by ID
  const getUser = async (req, res, next) => {
    try {
      const user = await usersService.getUser(req.params.id)
      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  }

  //get All
  const getUsers = async (req, res, next) => {
    try {
      const users = await usersService.getUsers()
      res.status(200).json(users)
    } catch (err) {
      next(err)
    }
  }

  return {
    update: updateUser,
    delete: deleteUser,
    get: getUser,
    getAll: getUsers,
  }
}
