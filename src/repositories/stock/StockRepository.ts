import { Stock } from "@/entities/Stock";

export interface StockRepository {
  addProductToStoreStock(
    storeId: string,
    productId: string,
    customPrice?: string,
    normalPrice?: string,
    suggestedPrice?: string
  ): Promise<Stock | null>;

  findStoreItems(storeId: string): Promise<Stock[] | null>;
  findProductInStock(storeId: string, productId: string)
}
