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
import { Providers } from "./entities/providers.entity";
import { BaseController } from "../base/base.controller";
import { ProvidersService } from "./providers.service.orm";

@ApiTags("providers")
@Controller("providers")
export class ProviderController extends BaseController<Providers> {
  constructor(private readonly providersService: ProvidersService) {
    super(providersService);
  }
}
