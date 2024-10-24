import { prisma } from "@/lib/prisma";
import { StockRepository } from "./StockRepository";
import { Stock } from "@/entities/Stock";

export class PrismaStockRepository implements StockRepository {
  async addProductToStoreStock(
    storeId: string,
    productId: string,
    customPrice?: string,
    normalPrice?: string,
    suggestedPrice?: string
  ) {
    const addProduct = await prisma.stock.create({
      data: {
        storeId,
        productId,
        normalPrice,
        customPrice,
        suggestedPrice,
      },
    });

    return addProduct;
  }

  async findStoreItems(
    storeId: string,
    page: number = 1,
    pageSize: number = 5
  ): Promise<{
    items: Stock[] | null;
    totalItems: number;
    totalPages: number;
    currentPage: number; // Adicionando a página atual
  }> {
    // Contar o total de itens no estoque da loja
    const totalItems = await prisma.stock.count({
      where: {
        storeId: storeId,
      },
    });
  
    console.log(pageSize);
  
    // Calcular o total de páginas
    const totalPages = Math.ceil(totalItems / pageSize);
  
    // Obter os itens do estoque com paginação
    const stockItems = await prisma.stock.findMany({
      where: {
        storeId: storeId,
      },
      include: {
        product: true,
      },
      skip: (page - 1) * pageSize, // Pular os itens das páginas anteriores
      take: pageSize, // Limitar o número de itens retornados
    });
  
    return {
      totalItems,
      totalPages,
      currentPage: page, // Retornando a página atual
      items: stockItems,
    };
  }
  

  async findProductInStock(storeId: string, productId: string) {
    const existingStock = await prisma.stock.findUnique({
      where: {
        storeId_productId: {
          storeId: storeId,
          productId: productId,
        },
      },
    });

    return existingStock;
  }
}
