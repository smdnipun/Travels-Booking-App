import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import userRoute from '../server/routes/user.routes.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/user', userRoute)

const uri = process.env.MONG_URL
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONG_URL).then(() => {
//       console.log('Connected to mongoDB')
//     })
//   } catch (err) {
//     throw err
//   }
// }

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

connection.on('disconnected', () => {
  console.log('mongoDB disconnected !!!')
})

//port connecting
app.listen(port, () => {
  // connect()
  console.log('Successfully connected to PORT 5000')
})
