import express from "express";
import { AtualizarUsuario, CriarUsuario, DeletarUsuario, ExibirTodosUsuarios, ExibirUsuarioId } from "../controllers/userControllers.js";
import { Router } from "express";


const router = Router()

router.get("/users", ExibirTodosUsuarios);
router.post("/users", CriarUsuario);
router.get("/user/:id", ExibirUsuarioId)
router.put("/user/:id", AtualizarUsuario)
router.delete("/user/:id", DeletarUsuario)

export default router