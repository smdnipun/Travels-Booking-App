import express from 'express'

import { AuthApi, UserApi } from '../controllers/user.controller.js'

const router = express.Router()
//auth 
router.post('/register', AuthApi().register)
router.post('/login', AuthApi().login)
router.put('/updatePwd/:id', AuthApi().updatePwd)
//update
router.put('/:id', UserApi().update)

//delete
router.delete('/:id', UserApi().delete)

//get
router.get('/:id', UserApi().get)

// get all
router.get('/', UserApi().getAll)

export default router
