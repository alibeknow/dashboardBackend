import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { Providers } from "../../providers/entities/providers.entity";
@Entity({ name: "tchannels", schema: "config" })
export class Channels extends BaseEntity {
  @Column({ length: 50 })
  @ApiModelProperty()
  readonly code: string;

  @Column("text")
  @ApiModelPropertyOptional()
  readonly description: string;

  @OneToMany((type) => Providers, (provider) => provider.channels)
  @ApiModelProperty()
  provider: Providers;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}
