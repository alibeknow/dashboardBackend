import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common'
import { Response } from 'express'
import { LdapStrategy } from './ldap-strategy'

@Catch(UnauthorizedException, ForbiddenException)
export class Unauthorized implements ExceptionFilter {
  constructor(private readonly strategy: LdapStrategy) {}
  catch(
    _exception: ForbiddenException | UnauthorizedException,
    host: ArgumentsHost,
  ) {
    console.log(
      _exception instanceof ForbiddenException ? `@Forbidden` : `@Unauthorized`,
    )
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    response.redirect(this.strategy.failureRedirect)
  }
}
