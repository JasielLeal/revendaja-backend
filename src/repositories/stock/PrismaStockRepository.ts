import { prisma } from "@/lib/prisma";
import { StockRepository } from "./StockRepository";

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
}
