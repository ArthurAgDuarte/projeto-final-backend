import prisma from "../connection/connection.js"
import crypto from "../utils/bcrypt.js";

class UserRepository{


    async create(body){
        try {
            const hashPassword = crypto(body.password)
            const createResult = await prisma.users.create({
                data:{
                    email: body.email,
                    nome: body.name,
                    senha: hashPassword,
                    bairro: "IHDUWHUD",
                    cep: "987TRER6789",
                    cidade: "SDCOIDHNI",
                    complemento: "7E622",
                    cpf: "8276679802987",
                    endereco: "0987654",
                    telefone: "O987654568798",
                    
                }
            })
            return createResult;
        } catch (err) {
            return err;
        }

        // return await prisma.users.create()
    }

    

    async getUnique(body) {

        try {
        const login = await prisma.users.findUnique({
            where: {
                email: body.email
            }

            
        })
                
        return login;

    } catch (error) {

        throw error;
    }

  }

}


export default new UserRepository();
