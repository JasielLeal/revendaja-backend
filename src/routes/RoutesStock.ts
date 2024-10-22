import { StockController } from "@/useCases/Stock/StockController";
import { Router } from "express";

const stockConstroller = new StockController();
export const RoutesStock = Router();

RoutesStock.post("/create", stockConstroller.AddProductToStoreStock);
RoutesStock.get("/getstock", stockConstroller.FindStoreItems);
