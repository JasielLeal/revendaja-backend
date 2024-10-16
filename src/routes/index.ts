import { Router } from "express";
import { RoutesUser } from "./RoutesUser";

export const routes = Router();

routes.use("/user", RoutesUser);
