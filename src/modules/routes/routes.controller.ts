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
import { Routes } from "./entities/routes.entity";
import { BaseController } from "../base/base.controller";
import { RoutesService } from "./routes.service.orm";

@ApiTags("Routes")
@Controller("Routes")
export class RoutesController extends BaseController<Routes> {
  constructor(private readonly routesService: RoutesService) {
    super(routesService);
  }
}
