import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { Providers } from "./entities/providers.entity";
import { BaseService } from "../base/base.service";

@Component()
export class ProvidersService extends BaseService<Providers> {
  constructor(
    @InjectRepository(Providers)
    private readonly ProvidersRepository: Repository<Providers>
  ) {
    super(ProvidersRepository);
  }
}
