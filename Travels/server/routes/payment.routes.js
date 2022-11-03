import express from 'express'
import {PaymentApi} from '../controllers/payment.controller.js'

const router = express.Router()

router.post('/add', PaymentApi().create)
router.get('/all/:id', PaymentApi().getById)
router.get('/get', PaymentApi().get)
router.get('/user/:user_id',PaymentApi().getByUser)

export default router
