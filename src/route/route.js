import express from "express";
import UserController from "../controller/UserController.js";
import ProductController from "../controller/ProductController.js";

const route = express.Router();
// Entender se a cade requisição é criada uma instância de userController
route.get("/product/all", ProductController.getAllProduct);
route.post("/user/register", UserController.createProduct);
route.put("/:id", ProductController.updateProduct);
route.get("/:id", ProductController.getProductById);
route.delete("/:id", ProductController.deleteProduct);
export default route;
