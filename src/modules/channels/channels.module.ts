import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "./channels.controller";
import { UsersService } from "./channels.service.orm";
import { User } from "./entities/channels.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  components: [UsersService],
})
export class UsersModule {}
