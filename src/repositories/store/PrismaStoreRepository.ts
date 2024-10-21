import { Store } from "@/entities/Store";
import { StoreRepository } from "./StoreRepository";
import { prisma } from "@/lib/prisma";

export class PrismaStoreRepository implements StoreRepository {
  async create(
    name: string,
    description: string,
    userId: string
  ): Promise<Store> {
    const storeData = await prisma.store.create({
      data: {
        name,
        userId,
        description,
      },
    });

    return storeData;
  }

  async findByName(name: string): Promise<Store | null> {
    const store = await prisma.store.findUnique({
      where: {
        name,
      },
    });

    return store;
  }

  async findById(id: string): Promise<Store | null> {
    const store = await prisma.store.findUnique({
      where: {
        id,
      },
    });

    return store;
  }
}
