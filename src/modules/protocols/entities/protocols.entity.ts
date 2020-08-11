import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

@Entity({ name: "tprotocols", schema: "config" })
export class Protocol extends BaseEntity {
  @Column({ length: 30 })
  @ApiProperty()
  readonly code: string;

  @Column("text")
  @ApiPropertyOptional()
  readonly description: string;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
