import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  public uid: string;
}
