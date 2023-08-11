import { Router } from "express";
import { urlSentByUser } from "../schemas/postsSchema.js";
import { productsGet, productsIdGet, urlsDelete, urlsPost } from "../controllers/controlProducts.js";
import { validateJoiForAll } from "../middlewares/validateSchema.js";


const urlRouter = Router();

urlRouter.post("/urls/shorten", validateJoiForAll(urlSentByUser), urlsPost);
urlRouter.get("/products", productsGet);
urlRouter.get("/products/:id", productsIdGet);
urlRouter.delete("/urls/:id", urlsDelete);


export default urlRouter;