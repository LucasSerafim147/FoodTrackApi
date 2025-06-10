import express from 'express'
import { connectDB } from './config/db.js'
import user from './models/user.js';

const app = express()
app.use(express.json());



await connectDB()

app.get('/', (req, res) => {
   
  res.send('Hello World')
})

app.post('/api/User', async (req, res) => {
try {
    
    const resposta = await user.create(req.body)
    res.status(200).json(resposta)


} catch (error) {
    res.status(500).json({message: error.message});
}


})

app.listen(3000,() =>{
    console.log("API RODANDO NA PORTA 3000")
})