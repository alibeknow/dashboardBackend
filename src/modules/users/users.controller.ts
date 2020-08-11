import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./entities/user.entity";
import { BaseController } from "../base/base.controller";
import { UsersService } from "./users.service.orm";

@Controller("users")
@ApiTags("users")
export class UsersController extends BaseController<User> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }
}
