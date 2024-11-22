import { verifyToken } from "../utils/jwt.js";

const validateToken = (request, response) =>{
    try{
        const token = request.header.authorization;

        const validateToken = verifyToken(token);
        console.log(validateToken);

        next();
        
    }catch(error){
        return response.status(400).json("tohen inválido");
    
    }
}

export default validateToken;
