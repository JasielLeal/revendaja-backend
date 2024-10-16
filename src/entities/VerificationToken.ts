export class VerificationToken {
    identifier: string; // Geralmente o email
    token: string;
    expires: Date;
  
    constructor(identifier: string, token: string, expires: Date) {
      this.identifier = identifier;
      this.token = token;
      this.expires = expires;
    }
  }
  