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
import { Parameters } from "./entities/parameters.entity";
import { BaseController } from "../base/base.controller";
import { ProvidersService } from "./parameters.service.orm";

@ApiTags("parameters")
@Controller("parameters")
export class ProviderController extends BaseController<Parameters> {
  constructor(private readonly providersService: ProvidersService) {
    super(providersService);
  }
}
