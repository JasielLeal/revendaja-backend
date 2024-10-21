export interface StockRepository {
  addProductToStoreStock(
    storeId: string,
    productId: string,
    customPrice?: string,
    normalPrice?: string,
    suggestedPrice?: string
  );
}
