import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { Routes } from "./entities/routes.entity";
import { BaseService } from "../base/base.service";

@Component()
export class RoutesService extends BaseService<Routes> {
  constructor(
    @InjectRepository(Routes)
    private readonly RoutesRepository: Repository<Routes>
  ) {
    super(RoutesRepository);
  }
}
