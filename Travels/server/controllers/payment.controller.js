import PaymentSchema from '../models/payment.model.js'
import paymentService from '../services/payment.service.js'

export const PaymentApi = () => {
  const createPayment = async (req, res, next) => {
    // const newLink = new PaymentSchema(req.body)
    try {
      const savedLink = await paymentService.createPayment(req.body)
      res.status(200).json(savedLink)
    } catch (err) {
      next(err)
    }
  }

  const getPayment = async (req, res, next) => {
    try {
      const payment = await PaymentSchema.findById(req.params.id)
      if (!payment) res.status(404)
      res.status(200).json(payment)
    } catch (err) {
      next(err)
    }
  }
  const getPayments = async (req, res, next) => {
    try {
      const payments = await paymentService.getPayments()
      if (!payments) res.status(404)
      res.status(200).json(payments)
    } catch (err) {
      next(err)
    }
  }

  const getPaymentByUserId = async (req, res, next) => {
    // let myquery = { user_id: Object(req.params.user_id) }
    // PaymentSchema.find(myquery, function (err, result) {
    //   if (err) throw err
    //   res.json(result)
    // })
    try {
      const payment = await paymentService.getPaymentByUserId(req.params.user_id)
      res.status(200).json(payment)
    } catch {
      next(err)
    }
  }

  return {
    create: createPayment,
    get: getPayments,
    getById: getPayment,
    getByUser: getPaymentByUserId,
  }
}
