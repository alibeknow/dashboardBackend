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
import { History } from "./entities/history.entity";
import { BaseController } from "../base/base.controller";
import { HistoryService } from "./history.service.orm";

@ApiUseTags("history")
@Controller("history")
export class HistoryController extends BaseController<History> {
  constructor(private readonly historyService: HistoryService) {
    super(historyService);
  }
}
