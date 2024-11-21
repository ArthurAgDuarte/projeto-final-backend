import UserRepository from "../repository/UserRepository.js";

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
}


export default new UserController();
