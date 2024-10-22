import { StockRepository } from "@/repositories/stock/StockRepository";
import { FindStoreItemsDTO } from "./FindStoreItemsDTO";

export class FindStoreItemsUseCase {
    constructor(private stockRepository: StockRepository) { }

    async execute({ storeId }: FindStoreItemsDTO) {
        const findStore = await this.stockRepository.findStoreItems(storeId)

        return findStore;
    }
}