import express from "express";
import { ExibirTodasMeals, criarMeal, exibirMealId,atualizarMeal,DeletarMeal } from "../controllers/mealController.js";
import { Router } from "express";


const mealsRoute = Router()

mealsRoute.get("/meals", ExibirTodasMeals);
mealsRoute.post("/meals", criarMeal);
mealsRoute.get("/meal/:id", exibirMealId)
mealsRoute.put("/meal/:id", atualizarMeal)
mealsRoute.delete("/meal/:id", DeletarMeal)

export default mealsRoute