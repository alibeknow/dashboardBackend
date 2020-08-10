import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { RouteTypes } from "./entities/routeTypes.entity";
import { BaseService } from "../base/base.service";

@Component()
export class RouteTypesService extends BaseService<RouteTypes> {
  constructor(
    @InjectRepository(RouteTypes)
    private readonly RouteTypesRepository: Repository<RouteTypes>
  ) {
    super(RouteTypesRepository);
  }
}
