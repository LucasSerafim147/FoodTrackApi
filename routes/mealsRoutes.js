import { ExibirTodasMeals, criarMeal, exibirMealId,atualizarMeal,DeletarMeal } from "../controllers/mealController.js";
import { Router } from "express";
import { proteger } from "../middleware/auth.js";


const mealsRoute = Router()

mealsRoute.get("/meals", proteger, ExibirTodasMeals);
mealsRoute.post("/meals", proteger,criarMeal);
mealsRoute.get("/meal/:id", exibirMealId)
mealsRoute.put("/meal/:id",proteger, atualizarMeal)
mealsRoute.delete("/meal/:id", proteger, DeletarMeal)

export default mealsRoute