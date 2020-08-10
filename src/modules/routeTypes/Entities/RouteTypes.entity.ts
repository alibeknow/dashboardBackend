import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { Routes } from "../../routes/entities/routes.entity";
@Entity({ name: "troutetypes", schema: "config" })
export class RouteTypes extends BaseEntity {
  @Column({ length: 2 })
  @ApiModelProperty()
  readonly code: string;

  @ManyToOne((type) => Routes, (route) => route.routeType)
  @JoinColumn({ name: "troutetypeid" })
  @ApiModelProperty()
  route: Routes;
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
