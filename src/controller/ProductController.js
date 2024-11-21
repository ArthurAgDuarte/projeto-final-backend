import ProductRepository from "../repository/ProductRepository.js";
import Joi from "joi";

class ProductController {
  // Validação de dados com Joi
  validateProductData(data) {
    const schema = Joi.object({
      name: Joi.string().required().messages({ 'any.required': 'O campo "name" é obrigatório.' }),
      price: Joi.number().positive().required().messages({ 'any.required': 'O campo "price" é obrigatório.', 'number.positive': 'O preço deve ser um número positivo.' }),
      stock: Joi.number().integer().min(0).required().messages({ 'any.required': 'O campo "stock" é obrigatório.', 'number.min': 'O estoque não pode ser negativo.' }),
    });

    return schema.validate(data, { abortEarly: false });
  }

  async getAllProduct(request, response) {
    try {
      const data = await ProductRepository.getAll();
      response.status(200).json(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error.message);
      response.status(500).json({ message: "Erro ao buscar produtos." });
    }
  }

  async createProduct(request, response) {
    try {
      const { error } = this.validateProductData(request.body);
      if (error) {
        return response.status(400).json({ errors: error.details.map((e) => e.message) });
      }

      const data = await ProductRepository.createProduct(request.body);
      response.status(201).json(data);
    } catch (error) {
      console.error("Erro ao criar produto:", error.message);
      response.status(500).json({ message: "Erro ao criar produto." });
    }
  }

  async updateProduct(request, response) {
    try {
      const { id } = request.params;

      const { error } = this.validateProductData(request.body);
      if (error) {
        return response.status(400).json({ errors: error.details.map((e) => e.message) });
      }

      const data = await ProductRepository.updateProduct(id, request.body);
      if (data) {
        response.status(200).json(data);
      } else {
        response.status(404).json({ message: "Produto não encontrado." });
      }
    } catch (error) {
      console.error("Erro ao atualizar produto:", error.message);
      response.status(500).json({ message: "Erro ao atualizar produto." });
    }
  }

  async getProductById(request, response) {
    try {
      const { id } = request.params;
      const data = await ProductRepository.getProductById(id);

      if (data) {
        response.status(200).json(data);
      } else {
        response.status(404).json({ message: "Produto não encontrado." });
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error.message);
      response.status(500).json({ message: "Erro ao buscar produto." });
    }
  }

  async deleteProduct(request, response) {
    try {
      const { id } = request.params;
      const success = await ProductRepository.deleteProduct(id);

      if (success) {
        response.status(204).send();
      } else {
        response.status(404).json({ message: "Produto não encontrado." });
      }
    } catch (error) {
      console.error("Erro ao excluir produto:", error.message);
      response.status(500).json({ message: "Erro ao excluir produto." });
    }
  }
}

export default new ProductController();
