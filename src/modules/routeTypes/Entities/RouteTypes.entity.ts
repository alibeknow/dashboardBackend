import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

@Entity({ name: "troutetypes", schema: "config" })
export class RouteTypes extends BaseEntity {
  @Column({ length: 2 })
  @ApiModelProperty()
  readonly code: string;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
