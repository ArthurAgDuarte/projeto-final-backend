import route from "./src/route/route.js";
import express, { json } from "express";
// import cors from 'cors';


const app = express();
const porta = 3000;
app.use(express.json());

app.use("/api", route)
// app.use(cors());

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);

});
