import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { Config } from "./entities/config.entity";
import { BaseService } from "../base/base.service";

@Injectable()
export class ConfigService extends BaseService<Config> {
  constructor(
    @InjectRepository(Config)
    private readonly configRepository: Repository<Config>
  ) {
    super(configRepository);
  }
}
