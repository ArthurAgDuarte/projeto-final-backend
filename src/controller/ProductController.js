import ProductRepository from "../repository/ProductRepository.js";
class ProductController {
  async getAllProduct(request, response) {
    try {
      const data = await ProductRepository.getAllProduct();
      response.status(200).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }
  async createProduct(request, response) {
    try {
      const data = await ProductRepository.createProduct();
      response.status(201).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }
  async updateProduct(request, response) {
    try {
      const data = await ProductRepository.updateProduct();
      response.status(200).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }
  async getProductById(request, response) {
    try {
      const data = await ProductRepository.getProductById();
      response.status(200).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }
  async deleteProduct(request, response) {
    try {
      const data = await ProductRepository.deleteProduct();
      response.status(200).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }
}

export default new ProductController();
