import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

export class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiModelProperty()
  public uid: string;
}
