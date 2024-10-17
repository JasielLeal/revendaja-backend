import { AppError } from "@/lib/AppError";
import { UserRepository } from "@/repositories/user/UserRepository";
import jwt from "jsonwebtoken";

export class VerifyEmailUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(token: string) {
    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.EMAIL_VERIFY);
    } catch (err) {
      throw new AppError("Token inválido ou expirado.", 400);
    }

    const user = await this.userRepository.findByEmail(decoded.email);
    if (!user) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    const date = new Date();

    await this.userRepository.updateEmailVerified(decoded.email, date);
  }
}
