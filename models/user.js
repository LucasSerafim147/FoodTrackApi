import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcryptjs"


const userSchema = new mongoose.Schema({
nome: String,
email: {type: String, unique:true},
senha: {type:String, required:true},
criadoEm:{type:Date, default:Date.now},

});

userSchema.pre("save", async function (next) {
    if(!this.isModified("senha")) return next();
    this.senha = await bcrypt.hash (this.senha,10);
    next();
    
});


userSchema.methods.compararSenha = function(senhaDigitada){
    return bcrypt.compare(senhaDigitada,this.senha)
}

const user = mongoose.model("User", userSchema);

export default user


