import { Router } from "express";
import { productsGet, productsIdGet, urlsPost, usersLoggedDelete } from "../controllers/controlProducts.js";



const urlRouter = Router();

urlRouter.post("/filtering", urlsPost);
urlRouter.get("/products", productsGet);
urlRouter.get("/products/:id", productsIdGet);
urlRouter.delete("/logout", usersLoggedDelete);


export default urlRouter;