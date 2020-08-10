import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiModelPropertyOptional()
  public uid: string;
}
