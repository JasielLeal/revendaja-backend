import { StoreRepository } from "@/repositories/store/StoreRepository";
import { CreateStoreDTO } from "./CreateStoreDTO";
import { AppError } from "@/lib/AppError";
import { UserRepository } from "@/repositories/user/UserRepository";

export class CreateStoreUseCase {
  constructor(
    private storeRepository: StoreRepository,
    private userRepository: UserRepository
  ) {}

  async execute({ name, description, userId }: CreateStoreDTO) {
    const userExist = await this.userRepository.findById(userId);

    if (!userExist) {
      throw new AppError("Usuário não existe", 400);
    }

    const storeExist = await this.storeRepository.findByName(name);

    if (storeExist) {
      throw new AppError("Nome da loja em uso.", 400);
    }

    const store = await this.storeRepository.create(name, description, userId);

    return store;
  }
}
