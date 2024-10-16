import { User } from "./User";

export class Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: User; // Relação com o User

  constructor(
    id: string,
    sessionToken: string,
    userId: string,
    expires: Date,
    user: User
  ) {
    this.id = id;
    this.sessionToken = sessionToken;
    this.userId = userId;
    this.expires = expires;
    this.user = user;
  }
}
