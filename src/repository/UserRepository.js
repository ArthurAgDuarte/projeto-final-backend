import prisma  from "../connection/connection.js";
import cryptPassword from "../utils/bcrypt.js";
class UserRepository {

    async create(body) {
        try {

            const hashPassword = cryptPassword(body.password);
            const createResult = await prisma.users.create({
                data: {
                    email: body.email,
                    nome: body.name,
                    senha: hashPassword,
                    bairro: body.bairro,
                    cep: body.cep,
                    cidade: body.cidade,
                    complemento: body.complemento,
                    cpf: body.cpf,
                    endereco: body.endereco,
                    telefone: body.telefone,
                } 
            })
            return createResult;
        }
        catch(error) {
            throw error;
        }
     
    }

    async getUnique(body) {
        try {
            const data = await prisma.users.findUnique({
                where: {
                    email: body.email
                }
            })
            return data;
        }

        catch(error) {
            
            throw error;
        }
    }

}

export default new UserRepository();