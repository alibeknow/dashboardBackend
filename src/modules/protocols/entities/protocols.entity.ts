import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

@Entity({ name: "tprotocols", schema: "config" })
export class Protocol extends BaseEntity {
  @Column({ length: 30 })
  @ApiModelProperty()
  readonly code: string;

  @Column("text")
  @ApiModelPropertyOptional()
  readonly description: string;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
