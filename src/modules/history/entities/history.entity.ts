import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

@Entity({ name: "thistory", schema: "history" })
export class History extends BaseEntity {
  @Column({ length: 255 })
  @ApiModelProperty()
  readonly address: string;

  @Column({ length: 255 })
  @ApiModelProperty()
  readonly provider: string;

  @Column({ length: 2 })
  @ApiModelProperty()
  readonly routeType: string;

  @Column("text")
  @ApiModelProperty()
  readonly message: string;

  @Column({ type: "numeric" })
  @ApiModelPropertyOptional()
  readonly status: number;

  @Column({ length: 30 })
  @ApiModelPropertyOptional()
  readonly channel: number;
  @Column("timestamp with time zone", {
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  @ApiModelProperty()
  readonly created: Date;

  @Column("timestamp with time zone", {
    nullable: false,
  })
  @ApiModelProperty()
  readonly sended: Date;

  @Column("timestamp with time zone", {
    nullable: false,
  })
  @ApiModelProperty()
  readonly delivered: Date;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
