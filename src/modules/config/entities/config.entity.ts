import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { Providers } from "../../providers/entities/providers.entity";

@Entity({ name: "tconfig", schema: "config" })
export class Config extends BaseEntity {
  @Column({ length: 30 })
  @ApiModelProperty()
  readonly code: string;

  @Column("text")
  @ApiModelPropertyOptional()
  readonly description: string;

  @ManyToOne((type) => Providers, (routes) => routes)
  @ApiModelProperty()
  @JoinColumn({ name: "tproviderid" })
  routes: Providers;
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
