import { Router } from "express";
import { RoutesUser } from "./RoutesUser";
import { RoutesStore } from "./RoutesStore";

export const routes = Router();

routes.use("/user", RoutesUser);
routes.use("/store", RoutesStore);
