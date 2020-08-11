import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity("users")
export class User extends BaseEntity {
  @Column({ length: 50 })
  @ApiPropertyOptional()
  readonly name: string;

  @Column({ type: "numeric" })
  @ApiProperty()
  readonly age: number;

  @Column({ length: 50 })
  @ApiProperty()
  readonly favouriteColor: string;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
