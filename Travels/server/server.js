import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import userRoute from '../server/routes/user.routes.js'


const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONG_URL).then(() => {
      console.log('Connected to mongoDB')
    })
  } catch (err) {
    throw err
  }
}

app.use(express.json())
// app.use(cors())

app.use('/user',userRoute)

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected !!!')
})

//port connecting
app.listen(process.env.PORT, () => {
  connect()
  console.log('Successfully connected to PORT 5000')
})
