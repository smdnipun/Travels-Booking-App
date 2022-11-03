import mongoose from 'mongoose'

const AllocateInspectorSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
})

export default mongoose.model('AllocateInspector', AllocateInspectorSchema)
