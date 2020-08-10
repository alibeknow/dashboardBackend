import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { Protocol } from "./entities/protocols.entity";
import { BaseController } from "../base/base.controller";
import { ProtocolsService } from "./protocols.service.orm";

@ApiUseTags("protocols")
@Controller("protocols")
export class ProtocolsController extends BaseController<Protocol> {
  constructor(private readonly protocolsService: ProtocolsService) {
    super(protocolsService);
  }
}
