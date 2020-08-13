import { RouteTypes } from "./../../routeTypes/entities/RouteTypes.entity";
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Providers } from "../../providers/entities/providers.entity";

@Entity({ name: "troutes", schema: "config" })
export class Routes extends BaseEntity {
  @Column("numeric")
  @ApiProperty()
  readonly prt: number;

  @ManyToOne(
    type => Providers,
    provider => provider.channels
  )
  @JoinColumn({ name: "tproviderid" })
  @ApiProperty()
  provider: Providers;

  @ManyToOne(
    type => RouteTypes,
    routeType => routeType.routes
  )
  @JoinColumn({ name: "troutetypeid" })
  @ApiProperty()
  routeType: RouteTypes;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
