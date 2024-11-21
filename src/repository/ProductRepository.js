import prisma from "../connection/connection.js";
class ProductRepository {
  async getAll() {
    return await prisma.produtos.findMany({
      include: {
        img: true,
      },
    });
  }
  async createProduct() {
    return await prisma.produtos.create({
      include: {
        img: true,
      },
    });
  }
  async updateProduct() {
    return await prisma.produtos.update({
      include: {
        img: true,
      },
    });
  }
  async getProductById() {
    return await prisma.produtos.getAll({
      include: {
        img: true,
      },
    });
  }
  async deleteProduct() {
    return await prisma.produtos.delete({
      include: {
        img: true,
      },
    });
  }
}
export default new ProductRepository();
