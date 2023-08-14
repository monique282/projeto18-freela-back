import { Router } from "express";
import {
    UnpauseProductsDelete, pauseUnpauseSaleBreak,
    pauseUnpauseSaleUnpause, productCategoryPost,
    productSalePost,
    productsGet, productsIdGet,
    productsSoldByUserGet,usersLoggedDelete
}
    from "../controllers/controlProducts.js";
import { registerProduct } from "../schemas/productsSchema.js";
import { validateJoiForAll } from "../middlewares/validateSchema.js";



const productsRouter = Router();

productsRouter.get("/filtering/:param", productCategoryPost);
productsRouter.get("/productUsers", productsSoldByUserGet);
productsRouter.get("/products", productsGet);
productsRouter.get("/products/:id", productsIdGet);
productsRouter.delete("/productDelete/:id", UnpauseProductsDelete);
productsRouter.delete("/logout", usersLoggedDelete);
productsRouter.get("/productBreak/:id", pauseUnpauseSaleBreak);
productsRouter.get("/productUnpause/:id", pauseUnpauseSaleUnpause);
productsRouter.post("/registeProduct", validateJoiForAll(registerProduct), productSalePost);



export default productsRouter;