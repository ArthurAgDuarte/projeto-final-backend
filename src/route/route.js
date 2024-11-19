import express from "express";
import ProductController from "../controller/ProductController.js";

const route = express.Router();
// Entender se a cade requisição é criada uma instância de userController
route.get("/product/all", ProductController.getAll);
export default route;
