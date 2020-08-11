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
import { Routes } from "./entities/routes.entity";
import { BaseController } from "../base/base.controller";
import { RoutesService } from "./routes.service.orm";

@ApiUseTags("Routes")
@Controller("Routes")
export class RoutesController extends BaseController<Routes> {
  constructor(private readonly routesService: RoutesService) {
    super(routesService);
  }
}
