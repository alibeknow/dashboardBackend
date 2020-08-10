import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChannelsController } from "./channels.controller";
import { ChannelsService } from "./channels.service.orm";
import { Channels } from "./entities/channels.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Channels])],
  controllers: [ChannelsController],
  components: [ChannelsService],
})
export class UsersModule {}
