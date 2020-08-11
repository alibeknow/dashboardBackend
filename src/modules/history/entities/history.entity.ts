import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

@Entity({ name: "thistory", schema: "history" })
export class History extends BaseEntity {
  @Column({ length: 255 })
  @ApiProperty()
  readonly address: string;

  @Column({ length: 255 })
  @ApiProperty()
  readonly provider: string;

  @Column({ length: 2 })
  @ApiProperty()
  readonly routeType: string;

  @Column("text")
  @ApiProperty()
  readonly message: string;

  @Column({ type: "numeric" })
  @ApiPropertyOptional()
  readonly status: number;

  @Column({ length: 30 })
  @ApiPropertyOptional()
  readonly channel: string;
  @Column("timestamp with time zone", {
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  @ApiProperty()
  readonly created: Date;

  @Column("timestamp with time zone", {
    nullable: false,
  })
  @ApiProperty()
  readonly sended: Date;

  @Column("timestamp with time zone", {
    nullable: false,
  })
  @ApiProperty()
  readonly delivered: Date;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
