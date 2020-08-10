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
import { RouteTypes } from "./entities/RouteTypes.entity";
import { BaseController } from "../base/base.controller";
import { RouteTypesService } from "./routeTypes.service.orm";

@ApiUseTags("routetypes")
@Controller("routetypes")
export class RouteTypesController extends BaseController<RouteTypes> {
  constructor(private readonly routeTypesService: RouteTypesService) {
    super(routeTypesService);
  }
}
