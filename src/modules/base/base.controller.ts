import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Query,
} from "@nestjs/common";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { IBaseService } from "./IBase.service";
import { BaseEntity } from "./base.entity";

export class BaseController<T extends BaseEntity> {
  constructor(private readonly IBaseService: IBaseService<T>) {}

  @Get()
  @ApiResponse({ status: 200, description: "Ok" })
  async findAll(
    @Query("offset") offset: number,
    @Query("limit") limit: number
  ): Promise<T[]> {
    return this.IBaseService.getAll(offset, limit);
  }

  @Get(":id")
  @ApiResponse({ status: 200, description: "Entity retrieved successfully." })
  @ApiResponse({ status: 404, description: "Entity does not exist" })
  async findById(@Param("uid") uid: string): Promise<T> {
    return this.IBaseService.get(uid);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created.",
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 400, description: "Bad Request." })
  async create(@Body() entity: T): Promise<string> {
    return this.IBaseService.create(entity);
  }

  @Delete(":id")
  @ApiResponse({ status: 200, description: "Entity deleted successfully." })
  @ApiResponse({ status: 400, description: "Bad Request." })
  async delete(@Param("uid") uid: string) {
    this.IBaseService.delete(uid);
  }

  @Put()
  @ApiResponse({ status: 400, description: "Bad Request." })
  @ApiResponse({ status: 200, description: "Entity deleted successfully." })
  async update(@Body() entity: T): Promise<T> {
    return this.IBaseService.update(entity);
  }
}
