import * as Strategy from "passport-ldapauth";
import { PassportStrategy, AuthModuleOptions } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, "ldap") {
  constructor(
    private readonly service: AuthService,
    private readonly options: AuthModuleOptions
  ) {
    super(
      {
        passReqToCallback: true,
        server: {
          url: "ldap://127.0.0.1:389",
          bindDN: "root",
          bindCredentials: "password",
          searchBase: "o=users,o=example.com",
          searchFilter: "(uid={{username}})",
          searchAttributes: ["displayName", "mail"],
        },
      },
      async (req: Request, user: any, done) => {
        req.user = user;
        return done(null, user);
      }
    );
  }
  async validate(username: string, password: string): Promise<any> {
    console.log(`@LocalStrategy validate`);
    const user = await this.service.validateUser(username, password);
    console.log(`@LocalStrategy validate ${JSON.stringify(user)}`);
    if (!user) throw new UnauthorizedException("Unknown user");
    return user;
  }
  public successRedirect: string = this.options["successRedirect"]; // '/secured-page'
  public failureRedirect: string = this.options["failureRedirect"]; // '/login-page'
}
