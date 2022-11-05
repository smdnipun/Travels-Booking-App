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
const uri = process.env.MONG_URL
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// get driver connection
// const dbo = require("./db/conn");

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`)
})

module.exports={app}