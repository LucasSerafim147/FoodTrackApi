import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
    
    titulo: String,
    descricao:String,
    fotoUrl: String,
    date: {type:Date, default:Date.now}
});


const meal = mongoose.model("meal", mealSchema);

export default meal