import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { Providers } from "../../providers/entities/providers.entity";
import { RouteTypes } from "../../routeTypes/entities/routeTypes.entity";
@Entity({ name: "troutes", schema: "config" })
export class Routes extends BaseEntity {
  @Column("numeric")
  @ApiModelProperty()
  readonly prt: number;

  @ManyToOne((type) => Providers, (provider) => provider.channels)
  @JoinColumn({ name: "tproviderid" })
  @ApiModelProperty()
  provider: Providers;

  @ManyToOne((type) => RouteTypes, (routeType) => routeType.routes)
  @JoinColumn({ name: "troutetypeid" })
  @ApiModelProperty()
  routeType: RouteTypes;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
