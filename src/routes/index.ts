import { Router } from "express";
import { RoutesUser } from "./RoutesUser";
import { RoutesStore } from "./RoutesStore";
import { RoutesProducts } from "./RoutesProducts";
import { RoutesStock } from "./RoutesStock";

export const routes = Router();

routes.use("/user", RoutesUser);
routes.use("/store", RoutesStore);
routes.use("/products", RoutesProducts);
routes.use("/stock", RoutesStock);
