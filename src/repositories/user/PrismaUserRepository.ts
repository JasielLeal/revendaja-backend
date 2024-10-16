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
}
