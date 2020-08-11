import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RouteTypesController } from "./routeTypes.controller";
import { RouteTypesService } from "./routeTypes.service.orm";
import { RouteTypes } from "./entities/routeTypes.entity";

@Module({
  imports: [TypeOrmModule.forFeature([RouteTypes])],
  controllers: [RouteTypesController],
  providers: [RouteTypesService],
})
export class RouteTypesModule {}
