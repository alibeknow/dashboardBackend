import { Module, DynamicModule } from "@nestjs/common";
import { PassportModule, IAuthModuleOptions } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LdapStrategy } from "./ldap-strategy";
import { SessionSerializer } from "./session.serializer";
import { AuthController } from "./auth.controller";

export interface AuthModuleOptions extends IAuthModuleOptions {
  successRedirect: string;
  failureRedirect: string;
}

@Module({
  imports: [
    PassportModule.register({
      session: true,
      successRedirect: "/secured-page",
      failureRedirect: "/login-page",
    }),
  ],
  providers: [AuthService, LdapStrategy, SessionSerializer],
  controllers: [AuthController],
  exports: [PassportModule, AuthService, LdapStrategy, SessionSerializer], // these exports are required to be able to reuse guard and filter
})
export class AuthModule {
  // here we could allow for customizing the service, strategy, serializer
  static register({
    successRedirect,
    failureRedirect,
  }: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        PassportModule.register({
          session: true,
          successRedirect,
          failureRedirect,
        }),
      ],
      providers: [AuthService, LdapStrategy, SessionSerializer],
      controllers: [AuthController],
      exports: [PassportModule, AuthService, LdapStrategy, SessionSerializer], // these exports are required to be able to reuse guard and filter
    };
  }
}
