import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { RouteTypes } from "./entities/RouteTypes.entity";
import { BaseService } from "../base/base.service";

@Injectable()
export class RouteTypesService extends BaseService<RouteTypes> {
  constructor(
    @InjectRepository(RouteTypes)
    private readonly RouteTypesRepository: Repository<RouteTypes>
  ) {
    super(RouteTypesRepository);
  }
}
