import { User } from './User';

export class Store {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user: User; // Relação com o User

  constructor(id: string, name: string, userId: string, user: User) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.user = user;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
