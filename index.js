import express from 'express'
import { connectDB } from './config/db.js'
import user from './models/user.js';
import usersRoute from './routes/userRoutes.js';
import mealsRoute from './routes/mealsRoutes.js';

const app = express()
app.use(express.json());



await connectDB()


app.use('/api',usersRoute)
app.use('/api',mealsRoute)

app.get('/', (req, res) => {
   
    res.send('Hello World')
})



app.listen(3000,() =>{
    console.log("API RODANDO NA PORTA 3000")
})