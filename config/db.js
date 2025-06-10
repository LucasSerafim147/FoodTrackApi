import mongoose from'mongoose';
import dotenv from 'dotenv'
dotenv.config()


mongoose.Promise = global.Promise;

const connect = mongoose.connection;
mongoose.set('strictQuery', true)

const connectDB = async() =>{
    const url = process.env.MONGO_URL

    connect.on('connected', async () =>{
        console.log("Banco conectado com sucesso")
    })
    connect.on('reconnected', async() =>{
        console.log("Banco reconectado com sucesso")
    })

    connect.on('disconnected',()=>{
        console.log('Banco Desconectado')
        console.log('Tentanto se conectar com o banco')


        setTimeout(()=>{
            mongoose.connect(url,{
                useNewurlParser: true,
                useUnifiedTopology: true,
                keepAlive: true,
                socketTimeourMS: 3000,
                connectTimeoutMS: 3000
            })
        }, 3000)
    })
     connect.on('close',() =>{
        console.log('Conexão fechada')
    });
    connect.on('error', (error) => {
        console.log('Erro na Conexão: '+ error)
    })
    await mongoose
    .connect(url,{
        useNewurlParser: true,
        useUnifiedTopology: true
    })
    .catch((error) => console.log(error))



}

export {connectDB};


