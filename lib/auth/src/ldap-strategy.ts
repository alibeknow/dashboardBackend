import * as Strategy from 'passport-ldapauth'
import { PassportStrategy, AuthModuleOptions } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { Request } from 'express'
import { AuthService } from './auth.service'

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, 'ldap') {
  constructor(
    private readonly service: AuthService,
    private readonly options: AuthModuleOptions,
  ) {
    super(
      {
        passReqToCallback: true,
        server: {
          url: 'ldap://10.15.15.11:3268',
          bindDN: 'BCCLDAP@bank.corp.centercredit.kz',
          bindCredentials: 'password',
          searchBase: 'DC=bank,DC=corp,DC=centercredit,DC=kz',
          searchFilter: '(uid={{username}})',
          searchAttributes: ['SamAccountName'],
        },
      },
      async (req: Request, user: any, done) => {
        req.user = user
        return done(null, user)
      },
    )
  }
  async validate(username: string, password: string): Promise<any> {
    console.log(`@ldapStrategy validate`)
    const user = await this.service.validateUser(username, password)
    console.log(`@ldapStrategy validate ${JSON.stringify(user)}`)
    if (!user) throw new UnauthorizedException('Unknown user')
    return user
  }
  public successRedirect: string = this.options['successRedirect'] // '/secured-page'
  public failureRedirect: string = this.options['failureRedirect'] // '/login-page'
}
