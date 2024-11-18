import ProductRepository from "../repository/ProductRepository.js";

class ProductController {
    async getALL(request, response) {
      try {
        const data = await ProductRepository.getALL()
        response.status(200).json(data)
      }
      catch(erro) {
         response.status(404).json(erro)
      }
    }
}

export default new ProductController();