import { UserController } from "@/useCases/User/UserController";
import { Router } from "express";

const userConstroller = new UserController();

export const RoutesUser = Router();

RoutesUser.post("/create", userConstroller.CreateUser);
RoutesUser.put("/verifyemail", userConstroller.VerifyEmail);
RoutesUser.post("/session", userConstroller.Authenticate);
