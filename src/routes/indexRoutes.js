// esse arquivo serve pra unir todos que eu estou escrevendo Rotas que esta dentro de Routes
// lebrando que todas as Rotas aqui vai pro app

import { Router } from "express";
import userRouter from "./userRoutes.js";
import productsRouter from "./productsRoutes.js";


const router = Router()

router.use([
    // rota para os usuario
    userRouter,

    // rotas dos produtos
    productsRouter

]);

export default router;
