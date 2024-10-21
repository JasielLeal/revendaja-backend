export interface AddProductToStoreStockDTO {
  storeId: string;
  productId: string;
  customPrice?: string;
  normalPrice?: string;
  suggestedPrice?: string;
}
