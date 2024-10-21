import { Store } from "./Store";
import { Product } from "./Product";

export class Stock {
  id?: string;
  quantity: number;
  customPrice?: string;
  normalPrice?: string;
  suggestedPrice?: string;
  status: string;
  storeId?: string;
  store?: Store;
  productId?: string;
  product?: Product;
  updatedAt?: Date;

  constructor(
    id?: string,
    quantity: number = 0,
    customPrice?: string,
    normalPrice?: string,
    suggestedPrice?: string,
    status: string = "Disponivel",
    storeId?: string,
    store?: Store,
    productId?: string,
    product?: Product,
    updatedAt?: Date
  ) {
    this.id = id;
    this.quantity = quantity;
    this.customPrice = customPrice;
    this.normalPrice = normalPrice;
    this.suggestedPrice = suggestedPrice
    this.status = status;
    this.storeId = storeId;
    this.store = store;
    this.productId = productId;
    this.product = product;
    this.updatedAt = updatedAt;
  }
}
