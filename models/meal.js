import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref:"User", required: [true, "Por favor insira o usuario"]},
    titulo: String,
    descricao:String,
    fotoUrl: String,
    date: {type:Date, default:Date.now}
});


const meal = mongoose.model("meal", mealSchema);

export default meal