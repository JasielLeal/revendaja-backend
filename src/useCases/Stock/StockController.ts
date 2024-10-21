import { AppError } from "@/lib/AppError";
import { Request, Response } from "express";
import { AddProductToStoreStockDTO } from "./addProductToStoreStock/AddProductToStoreStockDTO";
import { PrismaStockRepository } from "@/repositories/stock/PrismaStockRepository";
import { AddProductToStoreStockUseCase } from "./addProductToStoreStock/AddProductToStoreStockUseCase";
import { PrismaStoreRepository } from "@/repositories/store/PrismaStoreRepository";
import { PrismaProductsRepository } from "@/repositories/products/PrismaProductsRepository";

export class StockController {
  async AddProductToStoreStock(request: Request, response: Response) {
    try {
      const {
        storeId,
        productId,
        customPrice,
        normalPrice,
        suggestedPrice,
      }: AddProductToStoreStockDTO = request.body;

      const prismaStockRepository = new PrismaStockRepository();
      const prismaProductsRepository = new PrismaProductsRepository();
      const prismaStoreRepository = new PrismaStoreRepository();
      const addProductToStoreStockUseCase = new AddProductToStoreStockUseCase(
        prismaStockRepository,
        prismaStoreRepository,
        prismaProductsRepository
      );

      const addProduct = await addProductToStoreStockUseCase.execute({
        storeId,
        productId,
        customPrice,
        normalPrice,
        suggestedPrice,
      });

      return response.status(200).send(addProduct);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).send({ error: error.message });
      }

      return response.status(500).send({ error: error.message });
    }
  }
}
