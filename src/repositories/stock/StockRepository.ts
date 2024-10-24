import { Stock } from "@/entities/Stock";

export interface StockRepository {
  addProductToStoreStock(
    storeId: string,
    productId: string,
    customPrice?: string,
    normalPrice?: string,
    suggestedPrice?: string
  ): Promise<Stock | null>;

  findStoreItems(
    storeId: string,
    page: number,
    pageSize: number
  ): Promise<{
    items: Stock[] | null;
    totalItems: number;
    totalPages: number;
    currentPage: number;
  }>;
  findProductInStock(storeId: string, productId: string);
}
