import { StoreController } from "@/useCases/Store/StoreController";
import { Router } from "express";

const storeConstroller = new StoreController();

export const RoutesStore = Router();

RoutesStore.post("/create", storeConstroller.CreateStore);
