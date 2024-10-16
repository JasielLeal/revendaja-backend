import { Store } from "./Store";
import { Account } from "./Account";
import { Session } from "./Session";

export class User {
  id?: string;
  name: string;
  secondName: string;
  tokenVerify?: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  password: string;
  paymentStatus?: string;
  lastPayment?: Date; // Armazenar a senha criptografada
  role?: string;
  stores?: Store[];
  accounts?: Account[];
  sessions?: Session[];

  constructor(
    id: string,
    email: string,
    role: string,
    name?: string,
    secondName?: string,
    tokenVerify?: string,
    emailVerified?: Date,
    image?: string,
    password?: string,
    paymentStatus?: string,
    lastPayment?: Date
  ) {
    this.id = id;
    this.paymentStatus = paymentStatus;
    this.lastPayment = lastPayment;
    this.email = email;
    this.secondName = secondName;
    this.tokenVerify = tokenVerify;
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
