import { Router } from "express";
import {
    productCategoryPost, productsGet, productsIdGet,
    productsSoldByUserGet, usersLoggedDelete
}
    from "../controllers/controlProducts.js";



const urlRouter = Router();

urlRouter.get("/filtering/:param", productCategoryPost);
urlRouter.get("/products", productsGet);
urlRouter.get("/products/:id", productsIdGet);
urlRouter.get("/product/", productsSoldByUserGet);
urlRouter.delete("/logout", usersLoggedDelete);


export default urlRouter;