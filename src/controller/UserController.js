import UserRepository from "../repository/UserRepository.js";
import { validatePassword } from "../utils/bcrypt.js";

class UserController{
    async create(req, res){
        try {
            const createUser = await UserRepository.create(req.body)
            console.log(createUser);
            
            return res.status(201).json(`Usuário cadastrado com sucesso!\n ${createUser}`)
        } 
        catch (error) {
            return res.status(400).json(error)
        }
    }
    
    async getUnique(request, response) {
        try {
            const data = await UserRepository.getUnique(request.body);
            
            if(!data) {
                return response.status(404).json("usuário não cadastrado no sistema")
            }
              
            const verifyPassword = validatePassword(body.password, data.senha);
             
            if (verifyPassword === false) {
                return response.status(404).json("senha inválida")
            }

            return response.status(200).json("login efetuado!")
        }
        catch(error) {
            return response.status(400).json(error);
        }
    }
}


export default new UserController();
