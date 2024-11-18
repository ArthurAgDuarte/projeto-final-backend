import express from "express";
import ProductController from "../controller/ProductController.js";

const route = express.Router();

route.get("/product/all", ProductController.getALL);


export default route;