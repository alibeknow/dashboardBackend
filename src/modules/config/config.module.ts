import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigController } from "./config.controller";
import { ConfigService } from "./config.service.orm";
import { Config } from "./entities/config.entity";

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  controllers: [ConfigController],
  components: [ConfigService],
})
export class UsersModule {}
