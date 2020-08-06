import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "./routes.controller";
import { UsersService } from "./routes.service.orm";
import { User } from "./entities/routes.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  components: [UsersService],
})
export class UsersModule {}
