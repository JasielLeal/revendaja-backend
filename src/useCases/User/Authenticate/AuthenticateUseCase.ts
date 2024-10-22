import { AuthenticateDTO } from "./AuthenticateDTO";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "@/lib/AppError";
import { UserRepository } from "@/repositories/user/UserRepository";

interface AuthenticateResponse {
  token: string;
  user: {
    id: string;
    name: string;
    secondName: string;
    email: string;
    image: string;
    paymentStatus: string;
    role: string;
    userHasStore: boolean;
  };
  // adicione outros campos necessários
}

export class AuthenticateUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateDTO): Promise<AuthenticateResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Usuário não existe", 400);
    }

    const doesPasswordMatch = await compare(password, user.password);

    if (!doesPasswordMatch) {
      throw new AppError("Credenciais inválidas", 401);
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT Secret não configurado!");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    const userHasStore = await this.userRepository.userHasStore(user.id);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        secondName: user.secondName,
        email: user.email,
        image: user.image,
        paymentStatus: user.paymentStatus,
        role: user.role,
        userHasStore,
      },
      // inclua outros campos não sensíveis conforme necessário
    };
  }
}
