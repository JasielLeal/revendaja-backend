import { AppError } from "@/lib/AppError";
import { Request, Response } from "express";
import { CreateStoreDTO } from "./CreateStore/CreateStoreDTO";
import { PrismaStoreRepository } from "@/repositories/store/PrismaStoreRepository";
import { CreateStoreUseCase } from "./CreateStore/CreateStoreUseCase";
import { PrismaUserRepository } from "@/repositories/user/PrismaUserRepository";

export class StoreController {
  async CreateStore(request: Request, response: Response) {
    try {
      const { name, description, userId }: CreateStoreDTO = request.body;

      const prismaStoreRepository = new PrismaStoreRepository();
      const prismaUserRepository = new PrismaUserRepository();
      const createStoryUseCase = new CreateStoreUseCase(
        prismaStoreRepository,
        prismaUserRepository
      );

      const newStore = await createStoryUseCase.execute({
        name,
        description,
        userId,
      });

      return response.status(200).send(newStore);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).send({ error: error.message });
      }

      return response.status(500).send({ error: error.message });
    }
  }
}
