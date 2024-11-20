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
                    senha: hashPassword
                }
            })
            return createResult;
        } catch (err) {
            return err;
        }

        // return await prisma.users.create()
    }

}


export default new UserRepository();
