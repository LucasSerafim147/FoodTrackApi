import { ExibirTodasMeals, criarMeal, exibirMealId,atualizarMeal,DeletarMeal } from "../controllers/mealController.js";
import { Router } from "express";
import { proteger } from "../middleware/auth.js";
import upload from "../middleware/upload.js";


const mealsRoute = Router()

mealsRoute.get("/meals", proteger, ExibirTodasMeals);
mealsRoute.post("/meals", proteger, upload.single('image'),criarMeal);
mealsRoute.get("/meal/:id", exibirMealId)
mealsRoute.put("/meal/:id",proteger, atualizarMeal)
mealsRoute.delete("/meal/:id", proteger, DeletarMeal)

export default mealsRoute