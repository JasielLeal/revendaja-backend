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

  async findStoreItems(storeId: string): Promise<Stock[] | null> {
    const stockItems = await prisma.stock.findMany({
      where: {
        storeId: storeId, // Buscar itens de uma loja específica pelo storeId
      },
      include: {
        product: true, // Incluir os detalhes do produto relacionado
      },
    });

    return stockItems;
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
