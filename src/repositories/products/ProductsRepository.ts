import { Product } from "@/entities/Product";

export interface ProductsRepository {
  create(data: Product): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
}
