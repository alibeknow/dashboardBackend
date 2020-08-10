import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoutesController } from "./routes.controller";
import { RoutesService } from "./routes.service.orm";
import { Routes } from "./entities/routes.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Routes])],
  controllers: [RoutesController],
  components: [RoutesService],
})
export class RoutesModule {}
