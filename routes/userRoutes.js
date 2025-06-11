import express from "express";
import { AtualizarUsuario, CriarUsuario, DeletarUsuario, ExibirTodosUsuarios, ExibirUsuarioId } from "../controllers/userControllers.js";
import { Router } from "express";
import { proteger } from "../middleware/auth.js";


const usersRoute = Router()

usersRoute.get("/users", proteger,ExibirTodosUsuarios);
usersRoute.post("/users",CriarUsuario);
usersRoute.get("/user/:id",proteger, ExibirUsuarioId)
usersRoute.put("/user/:id", proteger,AtualizarUsuario)
usersRoute.delete("/user/:id",proteger, DeletarUsuario)

export default usersRoute