import { ProductsController } from "@/useCases/Products/ProductsController";
import { Router } from "express";

const productController = new ProductsController();

export const RoutesProducts = Router();

RoutesProducts.post("/create", productController.CreateProducts);
