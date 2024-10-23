import { User } from "@/entities/User";

export interface UserRepository {
  create(data: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(userId: string): Promise<User | null>;
  updateEmailVerified(email: string, emailVerified: Date): Promise<User | null>;
  userHasStore(userId: string): Promise<boolean>;
  
}
