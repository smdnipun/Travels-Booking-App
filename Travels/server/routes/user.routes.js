import express from 'express'
import {
  forgetPassword,
  login,
  register,
  updatePassword,
  verifyEmail,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
} from '../controllers/user.controller.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.put('/updatePwd/:id', updatePassword)
router.post('/verifyEmail', verifyEmail)
router.put('/forgetPassword', forgetPassword)
//update
router.put('/:id', updateUser)

//delete
router.delete('/:id', deleteUser)

//get
router.get('/:id', getUser)

// get all
router.get('/', getUsers)

export default router
