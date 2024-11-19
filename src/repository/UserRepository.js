import prisma from "../connection/connection.js";
import cryptPassword from "../utils/bcrypt.js";

class UserRepository {
  async create(body) {
    try {
      const hashPassword = cryptPassword(body.password);
      const createResult = await prisma.users.create({
        data: {
          email: body.email,
          senha: hashPassword,
          nome: body.name,
        },
      });
      return createResult;
    } catch (err) {
      return err;
    }
    // return await prisma.users.create()
  }
  async readAll() {}
}

export default new UserRepository();
