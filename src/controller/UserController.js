import UserRepository from "../repository/UserRepository.js";
class UserController {
  async create(request, response) {
    try {
      const createUser = await UserRepository.create(request.body);
      return response
        .status(201)
        .json("Usuário cadastrada no sistema\n" + createUser);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
export default new UserController;
