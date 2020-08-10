import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

@Entity({ name: "tproviders", schema: "config" })
export class Providers extends BaseEntity {
  @Column({ length: 30 })
  @ApiModelProperty()
  readonly code: string;

  @Column("text", { nullable: true })
  @ApiModelPropertyOptional()
  readonly name: string;

  @Column({ type: "numeric", nullable: false })
  @ApiModelPropertyOptional()
  readonly status: number;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
