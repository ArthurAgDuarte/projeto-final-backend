import UserRepository from "../repository/UserRepository.js";
import Joi from "joi";

class UserController {
  // Validação de dados do usuário
  validateUserData(data) {
    const schema = Joi.object({
      name: Joi.string().min(3).required().messages({
        "string.min": "O nome deve ter pelo menos 3 caracteres.",
        "any.required": "O campo 'name' é obrigatório.",
      }),
      email: Joi.string().email().required().messages({
        "string.email": "O e-mail deve ser válido.",
        "any.required": "O campo 'email' é obrigatório.",
      }),
      password: Joi.string().min(6).required().messages({
        "string.min": "A senha deve ter pelo menos 6 caracteres.",
        "any.required": "O campo 'password' é obrigatório.",
      }),
    });

    return schema.validate(data, { abortEarly: false });
  }

  async create(request, response) {
    try {
      // Validação dos dados enviados
      const { error } = this.validateUserData(request.body);
      if (error) {
        return response.status(400).json({
          errors: error.details.map((detail) => detail.message),
        });
      }

      // Criação do usuário no repositório
      const createUser = await UserRepository.create(request.body);

      // Retorna o usuário criado
      return response.status(201).json({
        message: "Usuário cadastrado com sucesso.",
        user: createUser,
      });
    } catch (error) {
      console.error("Erro ao criar usuário:", error.message);

      // Retorna erro genérico para o cliente
      return response
        .status(500)
        .json({ message: "Erro ao cadastrar usuário no sistema." });
    }
  }
}

export default new UserController();
