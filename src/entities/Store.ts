import { Stock } from "./Stock";
import { User } from "./User";

export class Store {
  id?: string;
  name: string;
  description?: string;
  status: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: User;
  stock?: Stock[];

  constructor(
    id: string,
    name: string,
    userId?: string,
    status: string = "Ativa",
    description?: string,
    createdAt?: Date,
    updatedAt?: Date,
    user?: User,
    stock?: Stock[]
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.description = description;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.user = user;
    this.stock = stock;
  }
}
