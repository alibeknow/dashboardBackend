import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { Channels } from "../../channels/entities/channels.entity";
import { Routes } from "../../routes/entities/routes.entity";
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

  @OneToMany((type) => Channels, (channel) => channel.provider)
  @ApiModelProperty()
  channels: Channels[];

  @ManyToOne((type) => Routes, (routes) => routes.provider)
  @ApiModelProperty()
  @JoinColumn({ name: "tchannelid" })
  routes: Routes;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
