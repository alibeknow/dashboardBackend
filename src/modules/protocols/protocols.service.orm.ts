import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { Protocol } from "./entities/protocols.entity";
import { BaseService } from "../base/base.service";

@Component()
export class ProtocolsService extends BaseService<Protocol> {
  constructor(
    @InjectRepository(Protocol)
    private readonly protocolRepository: Repository<Protocol>
  ) {
    super(protocolRepository);
  }
}
