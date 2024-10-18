import { Product } from "./Product";
import { Store } from "./Store";

export class Stock {
  id: string;
  quantity: number;
  storeId: string;
  store: Store;
  productId: string;
  product: Product;

  constructor(
    id: string,
    quantity: number,
    storeId: string,
    store: Store,
    productId: string,
    product: Product
  ) {
    this.id = id;
    this.quantity = quantity;
    this.storeId = storeId;
    this.store = store;
    this.productId = productId;
    this.product = product;
  }
}
