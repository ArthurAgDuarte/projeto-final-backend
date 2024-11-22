import UserRepository from "../repository/UserRepository.js";
import { validatePassword } from "../utils/bcrypt.js";
import gerarToken from "../utils/jwt.js";
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
            console.log(data); 
            
            
            if(!data) {
                return response.status(400).json("usuário não cadastrado no sistema")
            }
              
            const verifyPassword = validatePassword(request.body.password, data.senha);
             
            if (verifyPassword === false) {
                return response.status(404).json("senha inválida")
            }
            
            const token = gerarToken(request.body.email);
            const user = (request.body)
            return response.status(200).json({
                token: token,
                user:user,
                message: "Login efetuado e token gerado"
            })

        }
        catch(error) {
            console.log(error);
            
            return response.status(400).json(error);
        }
    }
}

export default new UserController();
