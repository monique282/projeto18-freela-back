import { Router } from "express";
import {
    UnpauseProductsDelete, pauseUnpauseSaleBreak,
    pauseUnpauseSaleUnpause, productCategoryPost,
    productsGet, productsIdGet,
    productsSoldByUserGet
}
    from "../controllers/controlProducts.js";



const productsRouter = Router();

productsRouter.get("/filtering/:param", productCategoryPost);
productsRouter.get("/productUsers", productsSoldByUserGet);
productsRouter.get("/products", productsGet);
productsRouter.get("/products/:id", productsIdGet);
productsRouter.delete("/productDelete/:id", UnpauseProductsDelete);
productsRouter.get("/productBreak/:id", pauseUnpauseSaleBreak);
productsRouter.get("/productUnpause/:id", pauseUnpauseSaleUnpause);


export default productsRouter;