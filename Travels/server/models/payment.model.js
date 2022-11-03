import mongoose from 'mongoose'

const PaymentSchema = new mongoose.Schema({
   amount: {
    type: String,
    required: true,
  },
  cardNo: {
    type: String,
    required: true,
  },
  cvv: {
    type:String,
    required: true,
  },
  expireDate: {
    type: String,
    required: true,
    },
    user_id: {
      type:String
  }
})

export default mongoose.model('Payment', PaymentSchema)