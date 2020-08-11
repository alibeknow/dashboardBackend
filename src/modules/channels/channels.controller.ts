import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from "@nestjs/common";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { Channels } from "./entities/channels.entity";
import { BaseController } from "../base/base.controller";
import { ChannelsService } from "./channels.service.orm";

@ApiTags("channels")
@Controller("channels")
export class ChannelsController extends BaseController<Channels> {
  constructor(private readonly channelsService: ChannelsService) {
    super(channelsService);
  }
}
