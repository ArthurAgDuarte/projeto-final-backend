import { verifyToken } from "../utils/jwt.js";

const validateToken = (request, response) =>{
    try{
        const token = request.headers.authorization;

        const validateToken = verifyToken(token);
        console.log(token);

        next();
        
    }catch(error){
        return response.status(400).json("tohen inválido");
    
    }
}

export default validateToken;
