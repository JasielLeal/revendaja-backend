import { Store } from "@/entities/Store";

export interface StoreRepository {
  create(name: string, description: string, userId: string): Promise<Store>;
  findByName(name: string): Promise<Store | null>;
  findById(id: string): Promise<Store | null>;
  findStoreByUserId(userId: string);
}
