import express from "express";
import UserController from "../controller/UserController.js";
import ProductController from "../controller/ProductController.js";
import UserController from "../controller/UserController.js";
import UserRepository from "../repository/UserRepository.js";
import validateToken from "../middleware/tokenValidade.js";

const route = express.Router();
// Entender se a cade requisição é criada uma instância de userController
route.post("/user/login", UserController.getUnique)
route.post("/user/register", UserController.create)
route.get("/adm/product", validateToken, (request, response) => {
    response.status(200).json("você está autorizado para acessar essa rota!")
})
route.get("/product/all", ProductController.getAllProduct);
route.put("/:id", ProductController.updateProduct);
route.get("/:id", ProductController.getProductById);
route.delete("/:id", ProductController.deleteProduct);
export default route;
