import PaymentSchema from '../models/payment.model.js'

export const PaymentApi = () => {
  const createPayment = async (req, res, next) => {
    const newLink = new PaymentSchema(req.body)

    try {
      const savedLink = await newLink.save()
      res.status(200).json(savedLink)
    } catch (err) {
      next(err)
    }
  }

  const getPayment = async (req, res, next) => {
    try {
      const payment = await PaymentSchema.findById(req.params.id)
      res.status(200).json(payment)
    } catch (err) {
      next(err)
    }
  }
  const getPayments = async (req, res, next) => {
    try {
      const payments = await PaymentSchema.find()
      res.status(200).json(payments)
    } catch (err) {
      next(err)
    }
  }

  const getPaymentByUserId = async (req, res, next) => {
    let myquery = { user_id: Object(req.params.user_id) }
    PaymentSchema.find(myquery, function (err, result) {
      if (err) throw err
      res.json(result)
    })
  }

  return {
    create: createPayment,
    get: getPayments,
    getById: getPayment,
    getByUser: getPaymentByUserId,
  }
}
