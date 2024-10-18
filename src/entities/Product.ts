import { Stock } from "./Stock";

export class Product {
  id: string;
  name: string;
  oldPrice: string;
  price: string;
  description: string;
  company: string;
  createdAt: Date;
  updatedAt: Date;
  stock: Stock[];

  constructor(
    id: string,
    name: string,
    oldPrice: string,
    price: string,
    description: string,
    company: string,
    createdAt: Date,
    updatedAt: Date,
    stock: Stock[]
  ) {
    this.id = id;
    this.name = name;
    this.oldPrice = oldPrice;
    this.price = price;
    this.description = description;
    this.company = company;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.stock = stock;
  }
}
