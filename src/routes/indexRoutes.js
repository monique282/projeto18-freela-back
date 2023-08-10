// esse arquivo serve pra unir todos que eu estou escrevendo Rotas que esta dentro de Routes
// lebrando que todas as Rotas aqui vai pro app

import { Router } from "express";
import userRouter from "./userRoutes.js";
import postsRouter from "./postsRoutes.js";


const router = Router()

router.use([
    // rota para os usuario
    userRouter,

    // rotas das posts
    postsRouter,

]);

export default router;
