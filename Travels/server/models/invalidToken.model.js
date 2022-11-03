import mongoose from 'mongoose'

const InvalidTokenSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  reson: {
    type: String,
    required: true,
  },
})

export default mongoose.model('InvalidToken', InvalidTokenSchema)
