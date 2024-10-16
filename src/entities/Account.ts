import { User } from "./User";

export class Account {
  id: string;
  userId: string;
  type: string; // Tipo de conta (ex: "email", "google")
  provider: string; // Provedor de autenticação
  providerAccountId: string; // ID da conta no provedor
  refreshToken?: string;
  accessToken?: string;
  expiresAt?: number;
  tokenType?: string;
  scope?: string;
  idToken?: string;
  sessionState?: string;
  user: User; // Relação com o User

  constructor(
    id: string,
    userId: string,
    type: string,
    provider: string,
    providerAccountId: string,
    user: User
  ) {
    this.id = id;
    this.userId = userId;
    this.type = type;
    this.provider = provider;
    this.providerAccountId = providerAccountId;
    this.user = user;
  }
}
