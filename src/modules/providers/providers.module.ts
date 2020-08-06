import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "./providers.controller";
import { UsersService } from "./providers.service.orm";
import { User } from "./entities/providers.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  components: [UsersService],
})
export class UsersModule {}
