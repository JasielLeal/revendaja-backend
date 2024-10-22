import { StockRepository } from "@/repositories/stock/StockRepository";
import { AddProductToStoreStockDTO } from "./AddProductToStoreStockDTO";
import { StoreRepository } from "@/repositories/store/StoreRepository";
import { AppError } from "@/lib/AppError";
import { ProductsRepository } from "@/repositories/products/ProductsRepository";

export class AddProductToStoreStockUseCase {
  constructor(
    private stockRepository: StockRepository,
    private storeRepository: StoreRepository,
    private productRepository: ProductsRepository
  ) {}

  async execute({
    storeId,
    productId,
    customPrice,
    normalPrice,
    suggestedPrice,
  }: AddProductToStoreStockDTO) {
    const storeExist = await this.storeRepository.findById(storeId);

    if (!storeExist) {
      throw new AppError("Loja não existe", 400);
    }

    const productExist = await this.productRepository.findById(productId);

    if (!productExist) {
      throw new AppError("Produto não cadastrado", 400);
    }

    const productExistInStock = await this.stockRepository.findProductInStock(
      storeId,
      productId
    );

    if (productExistInStock) {
      throw new AppError("Produto já adicionado ao estoque", 400);
    }

    const finalPrice = customPrice ? customPrice : productExist.suggestedPrice;

    const newSuggestedPrice = suggestedPrice
      ? suggestedPrice
      : productExist.suggestedPrice;

    const newNormalPrice = normalPrice ? normalPrice : productExist.normalPrice;

    const addProduct = await this.stockRepository.addProductToStoreStock(
      storeId,
      productId,
      finalPrice,
      newNormalPrice,
      newSuggestedPrice
    );

    return addProduct;
  }
}
