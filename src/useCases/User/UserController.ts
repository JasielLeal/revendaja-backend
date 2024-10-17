import { AppError } from "@/lib/AppError";
import { Request, Response } from "express";
import { CreateUseDTO } from "./CreateUser/CreateUserDTO";
import { PrismaUserRepository } from "@/repositories/user/PrismaUserRepository";
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";
import { VerifyEmailUseCase } from "./VerifyEmail/VerifyEmailUseCase";
import { AuthenticateDTO } from "./Authenticate/AuthenticateDTO";
import { AuthenticateUseCase } from "./Authenticate/AuthenticateUseCase";

export class UserController {
  async CreateUser(request: Request, response: Response) {
    try {
      const { email, name, password, role, secondName }: CreateUseDTO =
        request.body;

      const prismaUserRepository = new PrismaUserRepository();
      const createUserUseCase = new CreateUserUseCase(prismaUserRepository);

      const user = await createUserUseCase.execute({
        email,
        name,
        password,
        role,
        secondName,
      });

      return response.status(200).send(user);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).send({ error: error.message });
      }

      return response.status(500).send({ error: error.message });
    }
  }

  async VerifyEmail(request: Request, response: Response) {
    try {
      const { token } = request.query;
      const prismaUserRepository = new PrismaUserRepository();
      const verifyEmailUseCase = new VerifyEmailUseCase(prismaUserRepository);

      const user = await verifyEmailUseCase.execute(token as string);

      return response.status(200).send(user);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).send({ error: error.message });
      }

      return response.status(500).send({ error: error.message });
    }
  }

  async Authenticate(request: Request, response: Response) {
    try {
      const { email, password }: AuthenticateDTO = request.body;
      const prismaUserRepository = new PrismaUserRepository();
      const authenticateUseCase = new AuthenticateUseCase(prismaUserRepository);

      const user = await authenticateUseCase.execute({ email, password });

      return response.status(200).send(user);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).send({ error: error.message });
      }

      return response.status(500).send({ error: error.message });
    }
  }
}
