import express from 'express'
import mongoose from 'mongoose'

import { connectDB } from './config/db.js'

const app = express()
await connectDB()

app.get('/', (req, res) => {
   
  res.send('Hello World')
})

app.listen(3000,() =>{
    console.log("API RODANDO NA PORTA 3000")
})