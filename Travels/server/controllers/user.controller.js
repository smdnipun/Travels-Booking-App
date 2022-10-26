import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createError } from '../util/error.js'

export const register = async (req, res, next) => {
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

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return next(createError(404, 'User not found!'))

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    )
    if (!isPasswordCorrect)
      return next(createError(404, 'Wrong Password or Username'))

    const { password, ...otherDetails } = user._doc
    res .status(200)
      .json({ details: { ...otherDetails } })
  } catch (err) {
    next(err)
  }
}


export const updatePassword = async (req, res, next) => {
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

export const verifyEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user != null) {
      let obj = {
        message: 'Exist',
        id: user._id,
        name: user.fullName,
      }
      return res.status(200).json(obj)
    } else {
      return res.status(200).json({ message: 'failed' })
    }
  } catch (err) {
    next(err)
  }
}

export const forgetPassword = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.newPassword, salt)
    const obj = {
      password: hash,
    }
    await User.findByIdAndUpdate(
      req.body.id,
      {
        $set: obj,
      },
      {
        new: true,
      }
    )
    res.status(200).json('Password Updated')
  } catch (err) {
    next(err)
  }
}





//update
export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updateUser)
  } catch (err) {
    next(err)
  }
}

//delete
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User has been deleted')
  } catch (err) {
    next(err)
  }
}

//get by ID
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

//get All
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

// export const getUsers = async (req, res, next) => {
//   try {
//     const { q } = req.query
//     const users = await User.find()
//     const keys = ['firstName', 'lastName', 'type', 'stream', 'email']
//     const search = (data) => {
//       return data.filter((item) =>
//         keys.some((key) => item[key].toLowerCase().includes(q))
//       )
//     }
//     q ? res.json(search(users).slice(0, 10)) : res.json(users.slice(0, 10))
//   } catch (err) {
//     next(err)
//   }
// }

// export const getType = async (req, res, next) => {
//   const users = await User.find().select({ type: 1, _id: 0 })
//   res.status(200).json(users)
// }
