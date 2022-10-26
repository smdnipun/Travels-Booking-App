import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phnNo: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  nic: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
})

export default mongoose.model('User', UserSchema)
