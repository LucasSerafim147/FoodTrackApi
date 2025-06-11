import express from "express";
import { AtualizarUsuario, CriarUsuario, DeletarUsuario, ExibirTodosUsuarios, ExibirUsuarioId } from "../controllers/userControllers.js";
import { Router } from "express";


const usersRoute = Router()

usersRoute.get("/users", ExibirTodosUsuarios);
usersRoute.post("/users", CriarUsuario);
usersRoute.get("/user/:id", ExibirUsuarioId)
usersRoute.put("/user/:id", AtualizarUsuario)
usersRoute.delete("/user/:id", DeletarUsuario)

export default usersRoute