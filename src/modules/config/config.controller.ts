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
import { Config } from "./entities/config.entity";
import { BaseController } from "../base/base.controller";
import { ConfigService } from "./config.service.orm";

@ApiUseTags("config")
@Controller("config")
export class ConfigController extends BaseController<Config> {
  constructor(private readonly configService: ConfigService) {
    super(configService);
  }
}
