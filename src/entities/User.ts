import { Store } from "./Store";
import { Account } from "./Account";
import { Session } from "./Session";

export class User {
  id: string;
  name?: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  password?: string; // Armazenar a senha criptografada
  role: Role;
  stores: Store[];
  accounts: Account[];
  sessions: Session[];

  constructor(
    id: string,
    email: string,
    role: Role,
    name?: string,
    emailVerified?: Date,
    image?: string,
    password?: string
  ) {
    this.id = id;
    this.email = email;
    this.role = role;
    this.name = name;
    this.emailVerified = emailVerified;
    this.image = image;
    this.password = password;
    this.stores = [];
    this.accounts = [];
    this.sessions = [];
  }
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
