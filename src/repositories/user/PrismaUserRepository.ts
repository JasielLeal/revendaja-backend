import { User } from "@/entities/User";
import { UserRepository } from "./UserRepository";
import { prisma } from "@/lib/prisma";

export class PrismaUserRepository implements UserRepository {
  async create(data: User): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        secondName: data.secondName,
        password: data.password,
        role: data.role,
      },
    });

    return newUser;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async updateEmailVerified(email: string, emailVerified: Date) {
    const user = await prisma.user.update({
      where: {
        email, // Identificando o usuário pelo e-mail
      },
      data: {
        emailVerified, // Atualizando o campo emailVerified
      },
    });

    return user; // Retorna o usuário atualizado
  }

  async findById(userId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }

  async userHasStore(userId: string): Promise<boolean> {
    const userWithStores = await prisma.user.findUnique({
      where: { id: userId },
      include: { stores: true }, // Incluir as lojas relacionadas ao usuário
    });

    // Verifica se a lista de lojas não está vazia
    return userWithStores?.stores.length > 0;
  }

  
}
