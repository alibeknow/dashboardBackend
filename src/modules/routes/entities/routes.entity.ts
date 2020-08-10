import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

@Entity({ name: "troutes", schema: "config" })
export class Routes extends BaseEntity {
  @Column("numeric")
  @ApiModelProperty()
  readonly prt: number;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
