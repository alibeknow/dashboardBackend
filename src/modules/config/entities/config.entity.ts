import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Providers } from "../../providers/entities/providers.entity";
import { Protocol } from "../../protocols/entities/protocols.entity";
import { Parameters } from "../../parameters/entities/parameters.entity";

@Entity({ name: "tconfig", schema: "config" })
export class Config extends BaseEntity {
  @Column({ length: 30 })
  @ApiProperty()
  readonly code: string;

  @Column("text")
  @ApiPropertyOptional()
  readonly description: string;

  @ManyToOne((type) => Providers, (routes) => routes)
  @ApiProperty()
  @JoinColumn({ name: "tproviderid" })
  routes: Providers;

  @ManyToOne((type) => Protocol, (protocol) => protocol)
  @ApiProperty()
  @JoinColumn({ name: "tprotocolid" })
  protocol: Protocol;

  @ManyToOne((type) => Parameters, (parameters) => parameters)
  @ApiProperty()
  @JoinColumn({ name: "tparameterid" })
  parameters: Parameters;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
