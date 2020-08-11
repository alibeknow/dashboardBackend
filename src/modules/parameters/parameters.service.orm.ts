import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { Parameters } from "./entities/parameters.entity";
import { BaseService } from "../base/base.service";

@Component()
export class ProvidersService extends BaseService<Parameters> {
  constructor(
    @InjectRepository(Parameters)
    private readonly parametersRepository: Repository<Parameters>
  ) {
    super(parametersRepository);
  }
}
