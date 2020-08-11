import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from "@nestjs/common";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { Config } from "./entities/config.entity";
import { BaseController } from "../base/base.controller";
import { ConfigService } from "./config.service.orm";

@ApiTags("config")
@Controller("config")
export class ConfigController extends BaseController<Config> {
  constructor(private readonly configService: ConfigService) {
    super(configService);
  }
}
