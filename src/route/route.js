import express from "express";
import ProductController from "../controller/ProductController.js";
import UserController from "../controller/UserController.js";
import validateToken from "../middleware/tokenValidade.js";

const route = express.Router();
// Entender se a cade requisição é criada uma instância de userController
route.get("/product/all", ProductController.getAll);
route.post("/user/login", UserController.getUnique)
route.post("/user/register", UserController.create)
route.get("/adm/product", validateToken, (request, response) => {
    response.status(200).json("você está autorizado para acessar essa rota!")
})

// route.post("user/login", UserController.createUser)


export default route;
