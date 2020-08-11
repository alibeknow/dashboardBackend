import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Channels } from "../../channels/entities/channels.entity";
import { Routes } from "../../routes/entities/routes.entity";

@Entity({ name: "tproviders", schema: "config" })
export class Providers extends BaseEntity {
  @Column({ length: 30 })
  @ApiProperty()
  readonly code: string;

  @Column("text", { nullable: true })
  @ApiPropertyOptional()
  readonly name: string;

  @Column({ type: "numeric", nullable: false })
  @ApiPropertyOptional()
  readonly status: number;

  @ManyToOne((type) => Channels, (channel) => channel.provider)
  @JoinColumn({ name: "tchannelid" })
  @ApiProperty()
  readonly channels: Channels[];

  @OneToMany((type) => Channels, (channel) => channel.provider)
  @ApiProperty()
  readonly routes: Routes;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
