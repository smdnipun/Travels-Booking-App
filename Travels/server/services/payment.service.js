import Payment from '../models/payment.model.js'

class PaymentService {
  async createPayment(payment) {
    const obj = new Payment(payment)
    const insertPayment = await obj.save()
    if (!insertPayment) return null

    const json = insertPayment.toJSON()
    return json
  }
  async getPayment(id) {
    const payment = await Payment.findById(id)
    if (!payment) return null

    const json = payment.toJSON()
    return json
  }
  async getPayments() {
    const payment = await Payment.find()
    if (!payment) return null

    const json = payment.map((p) => {
      const j = p.toJSON()
      return j
    })
    return json
  }
  async getPaymentByUserId(id) {
    let myquery = { user_id: Object(id) }
    const payment = await Payment.find(myquery)
    if (!payment) return null

    const json = payment.map((p) => p.toJSON())
    return json
  }
}

const paymentService = new PaymentService()

export default paymentService
