import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

@Entity({ name: "tchannels", schema: "config" })
export class Channels extends BaseEntity {
  @Column({ length: 50 })
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
