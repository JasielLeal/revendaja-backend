import { Stock } from "./Stock";
import { User } from "./User";

export class Store {
  id?: string;
  name?: string;
  description?: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: User;
  stock?: Stock[];

  constructor(
    id?: string,
    name?: string,
    userId?: string,
    description?: string,
    createdAt?: Date,
    updatedAt?: Date,
    user?: User,
    stock?: Stock[]
  ) {
    this.id = id;
    this.description = description;
    this.name = name;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.user = user;
    this.stock = stock;
  }
}
