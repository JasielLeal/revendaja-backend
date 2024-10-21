import { Product } from "@/entities/Product";
import { ProductsRepository } from "./ProductsRepository";
import { prisma } from "@/lib/prisma";

export class PrismaProductsRepository implements ProductsRepository {
  async create(data: Product): Promise<Product | null> {
    const product = await prisma.product.create({
      data: {
        name: data.name,
        brand: data.brand,
        company: data.company,
        description: data.description,
        normalPrice: data.normalPrice,
        suggestedPrice: data.suggestedPrice,
      },
    });

    return product;
  }
}
