import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { User } from "./entities/routes.entity";
import { BaseController } from "../base/base.controller";
import { UsersService } from "./routes.service.orm";

@ApiUseTags("users")
@Controller("users")
export class UsersController extends BaseController<User> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }
}
