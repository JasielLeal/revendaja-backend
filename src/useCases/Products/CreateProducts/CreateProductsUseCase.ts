import { ProductsRepository } from "@/repositories/products/ProductsRepository";
import { CreateProductsDTO } from "./CreateProductDTO";

export class CreateProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    description,
    normalPrice,
    suggestedPrice,
    brand,
    company,
  }: CreateProductsDTO) {
    const newProduct = await this.productsRepository.create({
      description,
      name,
      normalPrice,
      suggestedPrice,
      brand,
      company,
    });

    return newProduct;
  }
}
