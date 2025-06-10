import mongoose, { model, Schema } from "mongoose";


const userSchema = new mongoose.Schema({
nome: String,
email: {type: String, unique:true},
senha: {type:String, required:true},
criadoEm:{type:Date, default:Date.now},

});

const user = mongoose.model("User", userSchema);

export default user


