import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { History } from "./entities/history.entity";
import { BaseService } from "../base/base.service";

@Injectable()
export class HistoryService extends BaseService<History> {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>
  ) {
    super(historyRepository);
  }
}
