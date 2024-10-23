import { Stock } from "./Stock";

export class Product {
  id?: string;
  name: string;
  normalPrice: string;
  suggestedPrice: string;
  description: string;
  imgUrl?: string;
  brand?: string;
  company?: string;
  createdAt?: Date;
  updatedAt?: Date;
  stock?: Stock[];

  constructor(
    id: string,
    name: string,
    normalPrice: string,
    suggestedPrice: string,
    description: string,
    imgUrl?: string,
    brand?: string,
    company?: string,
    createdAt?: Date,
    updatedAt?: Date,
    stock?: Stock[]
  ) {
    this.id = id;
    this.name = name;
    this.normalPrice = normalPrice;
    this.suggestedPrice = suggestedPrice;
    this.description = description;
    this.imgUrl = imgUrl;
    this.brand = brand;
    this.company = company;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.stock = stock;
  }
}
