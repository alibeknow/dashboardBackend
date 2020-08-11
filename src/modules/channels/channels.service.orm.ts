import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { Channels } from "./entities/channels.entity";
import { BaseService } from "../base/base.service";

@Component()
export class ChannelsService extends BaseService<Channels> {
  constructor(
    @InjectRepository(Channels)
    private readonly channelsRepository: Repository<Channels>
  ) {
    super(channelsRepository);
  }
}
