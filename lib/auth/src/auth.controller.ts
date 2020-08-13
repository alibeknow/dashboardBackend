import {
  Controller,
  Post,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common'
import { Unauthorized } from './auth.filter'
import { LdapStrategy } from './ldap-strategy'
import { LoginGuard } from './login.guard'

@Controller()
export class AuthController {
  constructor(private readonly strategy: LdapStrategy) {}
  @Post('login')
  @UseGuards(LoginGuard)
  @UseFilters(Unauthorized)
  async login(@Req() req, @Res() res) {
    console.log(`@AuthController /login ${JSON.stringify(req.user)}`)
    return req.user
      ? res.redirect(this.strategy.successRedirect)
      : res.redirect(this.strategy.failureRedirect)
  }
}
