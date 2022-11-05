import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import userRoute from './routes/user.routes.js'
import invalidTokenRoute from './routes/InvalidToken.routes.js'
import allocateInspectRoute from './routes/allocateInspector.routes.js'
import paymentRoute from './routes/payment.routes.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/user', userRoute)
app.use('/invalidToken', invalidTokenRoute)
app.use('/allocateInsp', allocateInspectRoute)
app.use('/payment', paymentRoute)

//database connection using singleton
const Database = (() => {
  let instance
  const uri = process.env.MONG_URL

  function createDatabaseInstance() {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    const connection = mongoose.connection
    return connection
  }
  function getDatabaseInstance() {
    if (!instance) {
      instance = createDatabaseInstance()
    }
    return instance
  }
  return { getDatabaseInstance }
})()

// const connection = mongoose.connection
const dbconnection = Database.getDatabaseInstance()

dbconnection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

dbconnection.on('disconnected', () => {
  console.log('mongoDB disconnected !!!')
})

//port connecting
app.listen(port, () => {
  console.log('Successfully connected to PORT 5000')
})
module.exports = { app }