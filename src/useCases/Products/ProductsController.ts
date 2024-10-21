import { AppError } from "@/lib/AppError";
import { Request, Response } from "express";
import { CreateProductsDTO } from "./CreateProducts/CreateProductDTO";
import { PrismaProductsRepository } from "@/repositories/products/PrismaProductsRepository";
import { CreateProductsUseCase } from "./CreateProducts/CreateProductsUseCase";

export class ProductsController {
  async CreateProducts(request: Request, response: Response) {
    try {
      const {
        name,
        description,
        normalPrice,
        suggestedPrice,
        brand,
        company,
      }: CreateProductsDTO = request.body;

      const prismaProductsRepository = new PrismaProductsRepository();
      const createProductsUseCase = new CreateProductsUseCase(
        prismaProductsRepository
      );

      const newProduct = await createProductsUseCase.execute({
        name,
        description,
        normalPrice,
        suggestedPrice,
        brand,
        company,
      });

      return response.status(200).send(newProduct);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).send({ error: error.message });
      }

      return response.status(500).send({ error: error.message });
    }
  }
}
