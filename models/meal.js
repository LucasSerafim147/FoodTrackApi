import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  imagem: String,
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true } 
});


const meal = mongoose.model("meal", mealSchema);

export default meal