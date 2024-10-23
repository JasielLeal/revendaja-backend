import { StockRepository } from "@/repositories/stock/StockRepository";
import { FindStoreItemsDTO } from "./FindStoreItemsDTO";
import { StoreRepository } from "@/repositories/store/StoreRepository";
import { UserRepository } from "@/repositories/user/UserRepository";
import { AppError } from "@/lib/AppError";

export class FindStoreItemsUseCase {
  constructor(
    private stockRepository: StockRepository,
    private storeRepository: StoreRepository,
    private userRepository: UserRepository
  ) {}

  async execute({ userId }: FindStoreItemsDTO) {
    const userHasStore = await this.userRepository.userHasStore(userId);

    if (!userHasStore) {
      throw new AppError("Usuário não tem loja");
    }

    const store = await this.storeRepository.findStoreByUserId(userId);

    if (!store) {
      throw new AppError("Nenhuma loja associada a esse usuário");
    }

    // Usa o storeId para buscar os itens de estoque
    const storeItems = await this.stockRepository.findStoreItems(store.id);

    return storeItems;
  }
}
